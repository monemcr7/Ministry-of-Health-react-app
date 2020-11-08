import React , {useState} from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Content from '../../Components/Content/Content';
import Widget from '../../Components/Widget/Widget';

const MainApplicationLayout = () => {
    const [open, setOpen] = useState(false);
    return (
        <React.Fragment>
           <main className={open ? 'clicked': null}>
               <div className="container-fluid h-100">
                   <div className="row h-100">
                       <Sidebar/>
                       <Content click={() => setOpen(!open)} />
                       <Widget />
                   </div>
               </div>
           </main>
        </React.Fragment>
    )
}

export default MainApplicationLayout;