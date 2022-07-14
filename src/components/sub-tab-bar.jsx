import '../assets/stylesheets/sub-tab-bar.scss'

const getLinkClassName  = (actualSubSection, expectedSubSection) => {
  return (actualSubSection == expectedSubSection) ? "activelink" : "link"
}
/**
 * Component to Render Sub TabBar
 */
 export default function SubTabBar({ section, selectedSubSection, onClick}) {

  return(
    <div >
      <h3>{ section.title }</h3>
      <hr/>
      <table>
        <td>
        { section.subTabs.map((item,index)=> {
          return <tr className={getLinkClassName(item, selectedSubSection)} onClick={() => onClick(item)}> {item.title }</tr>
        })}
        </td>
      </table>
    </div>
  );
}