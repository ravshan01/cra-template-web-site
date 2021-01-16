import './Loader.css';


export default function Loader(props){
  return(
    <div className={(props.type === 'preloader' ? 'preloader' : 'loader') + (props.className ? ` ${props.className}` : '')}>

      Loading...

    </div>
  )
}