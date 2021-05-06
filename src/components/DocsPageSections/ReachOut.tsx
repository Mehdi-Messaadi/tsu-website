import "./BrandingAndReachOut.css"
import Emoji from 'components/Emoji'

function ReachOut(props: any) {
    return <section>

        <ul className="sectionContent">
            <li><Emoji symbol="💡 " />Website Suggestions: If you have a suggestion for our website, submit it to us as an Issue on our <a href="https://github.com/Tech-Start-UCalgary/tsu-website/issues">GitHub repository</a>.</li>
            <li><Emoji symbol="📗 " />Guide Contributions: If you would like to contribute to our guides, you can reach out to us over <a href="https://discord.gg/Sxj5QrxRPk">Discord</a>, or leave a comment on the guide about minor changes.</li>
            <li><Emoji symbol="📩 " />Other Suggestions: Please feel free to reach out to us over other concerns over one of the public channels in our <a href="https://discord.gg/Sxj5QrxRPk">Discord</a>.</li>
        </ul>
    </section>;
}

export default ReachOut;