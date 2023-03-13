import Graphin, { Behaviors } from "@antv/graphin"
import NodeInfo from "./NodeInfo"
const { ZoomCanvas } = Behaviors

const data = {
  nodes: [
    {
      id: "node1",
      label: "server1",
      prob: 0.9,
      description: "This is a server",
    },
    {
      id: "node2",
      label: "server2",
      prob: 0.8,
      description: "This is a server",
    },
    {
      id: "node3",
      label: "server3",
      prob: 0.7,
      description: "This is a server",
    },
    {
      id: "node4",
      label: "server4",
      prob: 0.6,
      description: "This is a server",
    },
    {
      id: "node5",
      label: "server5",
      prob: 0.5,
      description: "This is a server",
    },
    {
      id: "node6",
      label: "server6",
      prob: 0.4,
      description: "This is a server",
    },
    {
      id: "node7",
      label: "server7",
      prob: 0.3,
      description: "This is a server",
    }
  ],
  edges: [
    {
      source: "node1",
      target: "node2",
      label: "edge1",
      prob: 0.9,
    },
    {
      source: "node1",
      target: "node3",
      label: "edge2",
      prob: 0.8,
    },
    {
      source: "node2",
      target: "node4",
      label: "edge3",
      prob: 0.7,
    },
    {
      source: "node2",
      target: "node5",
      label: "edge4",
      prob: 0.6,
    },
    {
      source: "node3",
      target: "node6",
      label: "edge5",
      prob: 0.5,
    },
    {
      source: "node3",

      target: "node7",
      label: "edge6",
      prob: 0.4,
    },
    {
      source: "node4",
      target: "node6",
      label: "edge7",
      prob: 0.6,
    },
    {
      source: "node5",
      target: "node6",
      label: "edge8",
      prob: 0.2,
    }
  ]
}

data.nodes.forEach(node => {
  node.style = {
    keyshape: {
      size: node.prob * 20
    },
    label: {
      value: node.label + '\n RCA概率为' + node.prob,
      fontSize: 8
    }
  }
})

data.edges.forEach(edge => {
  edge.style = {
    keyshape: {
      lineWidth: edge.prob * 4
    },
    label: {
      value: edge.label + '\n RCA概率为' + edge.prob,
      fontSize: 8
    }
  }
}
)

function Visulization () {
  return (
    <div>
      <NodeInfo />
      <Graphin
        data={data}
        layout={{ type: "graphin-force" }}
        height={800}
        fitView={true}
        draggable={true}
      >
        <ZoomCanvas />
      </Graphin>
    </div>
  )
}

export default Visulization