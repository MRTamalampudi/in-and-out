import React from "react";
import IconProps from "components/icons/icon-props";

const ErrorIcon = ({ className, height = 24, width = 24 }: IconProps) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox="0 0 100 100"
                className={className}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M49.875 3C54.2044 3 58.3548 3.55339 62.3262 4.66016C66.2975 5.76693 70.041 7.32943 73.5566 9.34766C77.0723 11.3659 80.2298 13.8073 83.0293 16.6719C85.8288 19.5365 88.2702 22.7103 90.3535 26.1934C92.4368 29.6764 94.0156 33.4036 95.0898 37.375C96.1641 41.3464 96.7174 45.513 96.75 49.875C96.75 54.2044 96.1966 58.3548 95.0898 62.3262C93.9831 66.2975 92.4206 70.041 90.4023 73.5566C88.3841 77.0723 85.9427 80.2298 83.0781 83.0293C80.2135 85.8288 77.0397 88.2702 73.5566 90.3535C70.0736 92.4368 66.3464 94.0156 62.375 95.0898C58.4036 96.1641 54.237 96.7174 49.875 96.75C45.5456 96.75 41.3952 96.1966 37.4238 95.0898C33.4525 93.9831 29.709 92.4206 26.1934 90.4023C22.6777 88.3841 19.5202 85.9427 16.7207 83.0781C13.9212 80.2135 11.4798 77.0397 9.39648 73.5566C7.31315 70.0736 5.73438 66.3464 4.66016 62.375C3.58594 58.4036 3.03255 54.237 3 49.875C3 45.5456 3.55339 41.3952 4.66016 37.4238C5.76693 33.4525 7.32943 29.709 9.34766 26.1934C11.3659 22.6777 13.8073 19.5202 16.6719 16.7207C19.5365 13.9212 22.7103 11.4798 26.1934 9.39648C29.6764 7.31315 33.4036 5.73438 37.375 4.66016C41.3464 3.58594 45.513 3.03255 49.875 3ZM49.875 90.5C53.5859 90.5 57.1667 90.0117 60.6172 89.0352C64.0677 88.0586 67.3066 86.6914 70.334 84.9336C73.3613 83.1758 76.112 81.0599 78.5859 78.5859C81.0599 76.112 83.1758 73.3776 84.9336 70.3828C86.6914 67.388 88.0586 64.1491 89.0352 60.666C90.0117 57.1829 90.5 53.5859 90.5 49.875C90.5 46.1641 90.0117 42.5833 89.0352 39.1328C88.0586 35.6823 86.6914 32.4434 84.9336 29.416C83.1758 26.3887 81.0599 23.638 78.5859 21.1641C76.112 18.6901 73.3776 16.5742 70.3828 14.8164C67.388 13.0586 64.1491 11.6914 60.666 10.7148C57.1829 9.73828 53.5859 9.25 49.875 9.25C46.1315 9.25 42.5345 9.73828 39.084 10.7148C35.6335 11.6914 32.4108 13.0586 29.416 14.8164C26.4212 16.5742 23.6706 18.6901 21.1641 21.1641C18.6576 23.638 16.5417 26.3724 14.8164 29.3672C13.0911 32.362 11.724 35.6009 10.7148 39.084C9.70573 42.5671 9.21745 46.1641 9.25 49.875C9.25 53.5859 9.73828 57.1667 10.7148 60.6172C11.6914 64.0677 13.0586 67.3066 14.8164 70.334C16.5742 73.3613 18.6901 76.112 21.1641 78.5859C23.638 81.0599 26.3724 83.1758 29.3672 84.9336C32.362 86.6914 35.6009 88.0586 39.084 89.0352C42.5671 90.0117 46.1641 90.5 49.875 90.5ZM46.75 28H53V59.25H46.75V28ZM46.75 65.5H53V71.75H46.75V65.5Z"
                    fill={"currentColor"}
                />
            </svg>
        </>
    );
};
export default React.memo(ErrorIcon);
