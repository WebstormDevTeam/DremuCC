import { _decorator, Component, instantiate, Node, Prefab, sys } from 'cc';
const { ccclass, property } = _decorator;

export interface RecyclableComponent extends Component {
    onInitialize(): void;
    onRecycle(): void;
}

export class StandardObjectPool<T extends RecyclableComponent> {
    private instance: T | null = null;
    private objList: T[] = [];

    constructor(private prefab: Prefab) {}

    public init(count: number): void {
        this.instance = instantiate(this.prefab).getComponent(this.prefab.name) as T;
        for (let i = 0; i < count; i++) {
            const obj = instantiate(this.prefab).getComponent(this.prefab.name) as T;
            obj.node.active = false;
            this.objList.push(obj);
        }
    }

    public getObject(): T {
        let obj: T;
        if (this.objList.length > 0) {
            obj = this.objList.pop()!;
        } else {
            obj = instantiate(this.prefab).getComponent(this.prefab.name) as T;
        }
        obj.node.active = true;
        obj.onInitialize();
        return obj;
    }

    public returnObject(obj: T): void {
        obj.node.active = false;
        obj.onRecycle();
        this.objList.push(obj);
    }
}