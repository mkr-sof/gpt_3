import React from 'react';
import './what.css';
import {Feature} from "../../components";

const What = () => {
    return (
        <div className="gpt3__whatWeDo section__margin" id="whatWeDo">
            <div className="gpt3__whatWeDo-feature">
                <Feature title="What We Are Doing" text="At the Security Sector, we take pride in offering cutting-edge security solutions designed to meet the unique needs of our clients. Discover the featured content below to learn more about the advanced security features we provide." />
            </div>
            <div className="gpt3__whatWeDo-heading">
                <h1 className="gradient__text">Explore Advanced Security Solutions with the Security Sector</h1>
                <p>Explore Our Services</p>
            </div>
            <div className="gpt3__whatWeDo-container">
                <Feature title="Tourniquet Technology" text="Experience the latest in emergency response with our innovative tourniquet solutions. Learn how our advanced technology ensures rapid and effective control in critical situations, enhancing the safety measures at your location." />
                <Feature title="Surveillance Cameras" text="Unlock a new level of security with our state-of-the-art surveillance camera systems. Explore the benefits of high-resolution imagery, smart analytics, and real-time monitoring that empower you to protect what matters most." />
                <Feature title="Access Control Systems" text="Take control of your security with our sophisticated access control systems. From biometric authentication to smart card readers, we provide customizable solutions to regulate and monitor access to your premises." />
                <Feature title="Smart Intrusion Detection" text="Discover how our smart intrusion detection systems go beyond traditional methods. Utilizing advanced sensors and artificial intelligence, we offer proactive security measures that detect and respond to potential threats in real time." />
                <Feature title="Emergency Response Planning" text="Prepare for the unexpected with our comprehensive emergency response planning services. Learn how our team collaborates with you to develop tailored strategies, ensuring a swift and effective response to any security incident." />
                <Feature title="Integration Solutions" text="Experience seamless security integration with our solutions. Find out how we combine various security features into a cohesive system, providing you with a comprehensive and efficient security infrastructure." />
            </div>
        </div>
    );
};

export default What;
