import { Card } from 'antd'

function NodeInfo (props) {
  const { id, label, prob, description } = props
  return (
    <div>
      <Card title="Servece 1" bordered={false} style={{ width: 400 }}>
        <p>标签信息: Label Info{label}</p>
        <p>根因概率: 0.6 {prob}</p>
        <p>服务描述: Description for Service{description}</p>
      </Card>
    </div>
  )
}

export default NodeInfo