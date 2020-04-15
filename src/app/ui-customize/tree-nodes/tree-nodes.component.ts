import { Component, OnInit } from "@angular/core";
import { FlatTreeControl } from "@angular/cdk/tree";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from "@angular/material/tree";

@Component({
  selector: "tree-nodes",
  templateUrl: "./tree-nodes.component.html",
  styleUrls: ["./tree-nodes.component.scss"],
})
export class TreeNodesComponent implements OnInit {
  ngOnInit() { }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  onClick(val) {

    console.log('====>', val);
  }
}

// ------------------------------------------------

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: any[] = [
  {
    name: "發光肌",
    children: [
      {
        name: "健康水噴霧",
        children: [
          { name: "下公館" },
          { name: "媽那邊" },
        ],
      },
      {
        name: "油水平衡露",
        children: [
          { name: "下公館" },
          { name: "媽那邊" },
        ],
      },
      {
        name: "早安精華",
        children: [
          { name: "下公館" },
          { name: "媽那邊" },
        ],
      },
      {
        name: "晚安精華",
        children: [
          { name: "下公館" },
          { name: "媽那邊" },
        ],
      },
    ],
  },
  {
    name: "水潤光",
    children: [
      {
        name: "保濕露",
        children: [
          { name: "下公館" },
          { name: "媽那邊" },
        ],
      },
      {
        name: "保濕日精華",
        children: [
          { name: "下公館" },
          { name: "媽那邊" },
        ],
      },
      {
        name: "保濕夜精華",
        children: [
          { name: "下公館" },
          { name: "媽那邊" },
        ],
      },
      {
        name: "保濕水凝乳",
        children: [
          { name: "下公館" },
          { name: "媽那邊" },
        ],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}