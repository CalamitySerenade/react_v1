import './navbar.mod.css' 
import { House, UserPen, FolderKanban, Contact} from 'lucide-react';
function navbar(){
    return(
        <nav>
            <p> Wilson Garate </p>
            <ul>
                <li>Home:  <House/></li>
                <li>About me: <UserPen/> </li>
                <li>Projects: <FolderKanban/></li>
                <li>Contacts: <Contact/> </li>
            </ul>
        </nav>
    );
}
export default navbar;