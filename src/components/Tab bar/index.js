
import './Tabbar.module.scss'

function TabBar(props) {
  this.State = {
    tabs: [
      { text: 'Home', icon: 'fa fa-home', key: 0, selected: true },
      { text: 'Archive', icon: 'fa fa-archive', key: 1, selected: false },
      { text: 'Analytics', icon: 'fa fa-bar-chart', key: 2, selected: false },
      { text: 'Upload', icon: 'fa fa-cloud-upload', key: 3, selected: false },
      { text: 'Settings', icon: 'fa fa-cogs', key: 4, selected: false },
    ],
    current: 0,
  };

function handleClick(e) {
  let id = parseInt(e.target.id);

  if (id !== this.state.current) {
    let tabs = this.state.tabs;

    tabs[e.target.id].selected = true;
    tabs[this.state.current].selected = false;

    this.setState({ tabs: tabs, current: id });
  }
}
return (
  <div className="container">
    <div className="tab-bar">
      {this.state.tabs.map((tab) => (
        <div
          id={tab.key}
          key={tab.key}
          className="tab"
          onClick={handleClick}
          style={{
            backgroundColor: tab.selected ? '#E7ECEA' : '#DDE2E0',
            borderTop: tab.selected ? 'solid 4px #57C185' : 'none',
          }}
        >
          <i
            className={tab.icon}
            style={{
              color: tab.selected ? '#57C185' : '#576574',
              fontSize: '2em',
              marginTop: '5%',
            }}
          ></i>
          <p
            style={{
              color: tab.selected ? '#57C185' : '#576574',
            }}
          >
            {tab.text}
          </p>
        </div>
      ))}
    </div>
    <h1>{this.state.current + 1}</h1>
  </div>
)};

export default TabBar;

