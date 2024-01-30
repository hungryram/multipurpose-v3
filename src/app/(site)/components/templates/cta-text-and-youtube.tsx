import Styles from "./cta-textimage.module.css";
import HeaderSection from "./header-section";
import { YouTubeEmbed } from "@next/third-parties/google";
import getYouTubeID from "get-youtube-id";

interface Props {
    content: string;
    reverseColumn: boolean;
    backgroundStyles: any;
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    textAlign: string;
    paddingTop: string;
    paddingBottom: string;
    imageWidth: number;
    columnLayout: string; // Added property for column layout
    youtubeLink: any;
}

export default function CalltoActionTextYoutube({
    content,
    reverseColumn,
    backgroundStyles,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonText,
    secondaryButtonLink,
    secondaryButtonStyle,
    paddingTop,
    paddingBottom,
    textAlign,
    columnLayout, // Added property for column layout
    youtubeLink
}: Props) {
    const getColumnLayoutClasses = () => {
        switch (columnLayout) {
            case "half":
                return "lg:w-1/2";
            case "twoFifths":
                return "lg:w-2/5";
            case "oneThird":
                return "lg:w-1/3";
            default:
                return "lg:w-1/2";
        }
    };

    const getSecondColumnLayoutClasses = () => {
        switch (columnLayout) {
            case "half":
                return "lg:w-1/2";
            case "twoFifths":
                return "lg:w-3/5";
            case "oneThird":
                return "lg:w-2/3";
            default:
                return "lg:w-1/2";
        }
    };

    const styles = {
        paddingTop: paddingTop ?? "5rem",
        paddingBottom: paddingBottom ?? "5rem",
    };

    const allStyles = { ...backgroundStyles, ...styles };

    return (
        <div style={allStyles}>
            <div className="container">
                <div className={`${Styles.ctaTextImageWrapper} space-y-10 ${reverseColumn ? "flex-row-reverse" : ""}`}>
                    {youtubeLink && (
                        <div className={`${getColumnLayoutClasses()}`}>
                            <YouTubeEmbed 
                                videoid={getYouTubeID(youtubeLink)}
                            />
                        </div>
                    )}
                    <div className={`${getSecondColumnLayoutClasses()}`}>
                        {(content || primaryButtonLink || secondaryButtonLink) && (
                            <HeaderSection
                                content={content}
                                textAlign={textAlign}
                                // PRIMARY
                                buttonLink={primaryButtonLink}
                                primaryButtonText={primaryButtonText}
                                primaryButtonStyle={primaryButtonStyle}
                                // SECONDARY
                                secondaryButtonLink={secondaryButtonLink}
                                secondaryButtonText={secondaryButtonText}
                                secondaryButtonStyle={secondaryButtonStyle}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
