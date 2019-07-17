import ForceGraph from 'force-graph'
import {dataSource} from './config'

const graph = ForceGraph()

const canvasObjectMaker = (node, ctx, globalScale) => {
    // taken from the example at https://github.com/vasturiano/force-graph/blob/master/example/text-nodes/index.html
    const label = node.id;
    const fontSize = 12/globalScale;
    ctx.font = `${fontSize}px Sans-Serif`;
    const textWidth = ctx.measureText(label).width;
    const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = node.color;
    ctx.fillText(label, node.x, node.y);
}

graph(document.getElementById('graph'))
    .graphData(dataSource)
    .nodeId('id')
    .nodeAutoColorBy('group')
    .nodeCanvasObject(canvasObjectMaker)