import { _decorator, Component, Node } from 'cc';
import { JudgementLine } from '../JudgementLine';
import { RecyclableComponent } from '../../Tools/ObjectPool'
const { ccclass, property } = _decorator;

export interface Note {
    CreateNote();
    ActiveNote(): void;

}

@ccclass("BaseNote")
export class BaseNote extends Component implements Note, RecyclableComponent {

    public ArrivalTime: Number;

    public JudgementLine: JudgementLine;

    public position: Number;

    public Bind(judgementLine: JudgementLine): void {
        this.node.setParent(judgementLine.node);
        this.JudgementLine = judgementLine;
    }

    public SetPosition(position: Number): void {
        this.position = position;
    }

    public SetArrivalTime(arrivalTime: Number): void {
        this.ArrivalTime = arrivalTime;
    }

    public CreateNote() {

    }

    public ActiveNote(): void {

    }

    public onInitialize(): void {

    }
    public onRecycle(): void {

    }
}