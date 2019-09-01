import React from "react";
import {
  Button,
  Icon,
  Sidebar,
  Segment,
  Menu,
  Header,
  Progress,
  Card
} from "semantic-ui-react";

const VerticalSidebar = ({ visible }) => (
  <Sidebar
    as={Menu}
    visible={visible}
    icon='labeled'
    vertical
    width='thin'
    // inverted
  >
    <Menu.Item onClick={() => console.log("menu item clicked")}>Home</Menu.Item>
  </Sidebar>
);
const items = [
  {
    header: "Mathematique",
    description: "Exam: 4 left",
    extra: "Cofficient: 5",
    meta: "Lecture: Ahaero Neho"
  },
  {
    header: "Physique",
    description: "Exam: 4 left",
    extra: "Cofficient: 5",
    meta: "Lecture: Ahaero Neho"
  },
  {
    header: "Francais",
    description: "Exam: 4 left",
    extra: "Cofficient: 5",
    meta: "Lecture: Ahaero Neho"
  },
  {
    header: "Geometrie",
    description: "Exam: 4 left",
    extra: "Cofficient: 5",
    meta: "Lecture: Ahaero Neho"
  },
  {
    header: "Chimie",
    description: "Exam: 4 left",
    extra: "Cofficient: 5",
    meta: "Lecture: Ahaero Neho"
  }
];

class SubjectList extends React.Component {
  state = {
    visible: false
  };

  handleAmimationChange = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.handleAmimationChange} icon labelPosition='left'>
          <Icon name='sidebar' />
          Menu
        </Button>
        <Sidebar.Pushable as={Segment}>
          <VerticalSidebar visible={visible} />

          <Sidebar.Pusher dimmed={visible}>
            <Progress percent={44} progress />
            <Card.Group items={items} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </React.Fragment>
    );
  }
}

export default SubjectList;
