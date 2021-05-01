import Team from './Team/Team';
import useViewport from '../UseViewport';
import './TeamSection.css';
import '../../App.css'
import { executiveTeam, projectManagers } from './TeamInformation';
import Divider from "components/Divider";
import { Link } from "react-router-dom";

const TeamSection = () => {

    const { width } = useViewport(); // get screen width
    const breakpoint = 750; // set breakpoint

    // set headers and defaultView flag according to screen width
    let headers = [];
    let defaultView = true;
    if (width > breakpoint)
        headers = ["chonkyHeading", "thiccSubheading", "babyHeading"];
    else {
        headers = ["thiccSubheading", "babyHeading", "regularText"];
        defaultView = false;
    }

    return (
        <div className="TeamSection" >
            <h1 className="chonkyHeading">Our Team</h1>
            <Divider />

            <div className={headers[2]} style={{ "padding": "4em 0em", "textAlign": "center" }}>
                <p>Tech Start is only possible thanks to our team of talented, passionate leaders. Interested in joining us?</p>
                <div className="applyLinkDiv">
                    <Link className="applyLink" to="/apply" > Find out what it takes to apply!</Link>
                </div>
            </div>

            <h2 className={headers[1]} style={{ "textAlign": "center" }}><u>Executives</u></h2>
            <Team teamMembers={executiveTeam} defaultView={defaultView} />

            <h2 className={headers[1]} style={{ "textAlign": "center" }}><u>Project Managers</u></h2>
            <Team teamMembers={projectManagers} defaultView={defaultView} />
        </div>
    );
}

export default TeamSection;
