/**
 * Component to Render NavBar
 */
 export default function Article({ subSection }) {
  return(
    <div >
      <h1>{ subSection.title }</h1>
      <p>{ subSection.content }</p>
    </div>
  );
}