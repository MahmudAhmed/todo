import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithubSquare,
    faMedium
} from "@fortawesome/free-brands-svg-icons";

const PROFILES = [
    {
        url: "https://www.linkedin.com/in/mahmud-ahmed/",
        icon: faLinkedin
    },
    {
        url: "https://www.github.com/mahmudahmed",
        icon: faGithubSquare
    },
    {
        url: "https://mahmudahmed.com",
        icon: faMedium
    }
]
export const Footer = () => {


    return (
        <footer id="footer">
            <div className="footer-icons-container">
                {
                    PROFILES.map(profile => {
                        return (
                            <div>
                                <a
                                    href={profile.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={profile.icon}
                                        color="white"
                                        className="footer-icon"
                                    />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
            <p>Designed & Coded by <span id="author-signature">Mahmud Ahmed</span></p>
        </footer>
    );
}
