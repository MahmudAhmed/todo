import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";

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
        icon: faUserCircle
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
