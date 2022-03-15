import ClientExpCard from "../ClientExpCard/ClientExpCard";
import './ClientExperienceSection.scss'

function ClientExperienceSection() {
    return (
    <div className="client-experience-section">
        <span className="organize-display">
            <ClientExpCard/>
        </span>
        <span className="organize-display">
            <ClientExpCard/>
        </span>
        <span>
            <ClientExpCard/>
        </span>
    </div>
    )
}

export default ClientExperienceSection;
