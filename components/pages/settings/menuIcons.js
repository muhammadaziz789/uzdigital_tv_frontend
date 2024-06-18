export const ProfileIcon = ({ width, height, stroke }) => (
    <svg
        width={width ? width : '24'}
        height={height ? height : '24'}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
            stroke={stroke ? stroke : 'white'}
            strokeWidth="2"
            strokeMiterlimit="10"
        />
        <path
            d="M2.90527 20.2491C3.82736 18.6531 5.15322 17.3278 6.74966 16.4064C8.34611 15.485 10.1569 15 12.0002 15C13.8434 15 15.6542 15.4851 17.2506 16.4065C18.8471 17.3279 20.1729 18.6533 21.0949 20.2493"
            stroke={stroke ? stroke : 'white'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const FavoritesIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20.1598 5.00017C19.0998 3.93737 17.6946 3.28871 16.1981 3.17134C14.7017 3.05397 13.2126 3.47563 11.9998 4.36017C10.7274 3.4138 9.14378 2.98468 7.56771 3.1592C5.99164 3.33373 4.54023 4.09894 3.50576 5.30075C2.47129 6.50256 1.93061 8.05169 1.99259 9.63618C2.05457 11.2207 2.71461 12.7228 3.83979 13.8402L10.0498 20.0602C10.5698 20.5719 11.2702 20.8588 11.9998 20.8588C12.7294 20.8588 13.4298 20.5719 13.9498 20.0602L20.1598 13.8402C21.3274 12.6654 21.9827 11.0764 21.9827 9.42017C21.9827 7.76389 21.3274 6.1749 20.1598 5.00017V5.00017ZM18.7498 12.4602L12.5398 18.6702C12.4691 18.7415 12.385 18.7982 12.2923 18.8368C12.1996 18.8755 12.1002 18.8954 11.9998 18.8954C11.8994 18.8954 11.7999 18.8755 11.7072 18.8368C11.6146 18.7982 11.5305 18.7415 11.4598 18.6702L5.24979 12.4302C4.46555 11.6285 4.0264 10.5516 4.0264 9.43017C4.0264 8.3087 4.46555 7.23182 5.24979 6.43017C6.04894 5.64115 7.12676 5.19873 8.24979 5.19873C9.37281 5.19873 10.4506 5.64115 11.2498 6.43017C11.3428 6.52389 11.4534 6.59829 11.5752 6.64906C11.6971 6.69983 11.8278 6.72596 11.9598 6.72596C12.0918 6.72596 12.2225 6.69983 12.3444 6.64906C12.4662 6.59829 12.5768 6.52389 12.6698 6.43017C13.4689 5.64115 14.5468 5.19873 15.6698 5.19873C16.7928 5.19873 17.8706 5.64115 18.6698 6.43017C19.4648 7.22132 19.9184 8.29236 19.9333 9.41385C19.9483 10.5353 19.5234 11.6181 18.7498 12.4302V12.4602Z"
            fill="white"
        />
    </svg>
)

export const HistoryIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 2C9.43639 2.00731 6.97349 2.99891 5.12 4.77V3C5.12 2.73478 5.01464 2.48043 4.82711 2.29289C4.63957 2.10536 4.38522 2 4.12 2C3.85478 2 3.60043 2.10536 3.41289 2.29289C3.22536 2.48043 3.12 2.73478 3.12 3V7.5C3.12 7.76522 3.22536 8.01957 3.41289 8.20711C3.60043 8.39464 3.85478 8.5 4.12 8.5H8.62C8.88522 8.5 9.13957 8.39464 9.32711 8.20711C9.51464 8.01957 9.62 7.76522 9.62 7.5C9.62 7.23478 9.51464 6.98043 9.32711 6.79289C9.13957 6.60536 8.88522 6.5 8.62 6.5H6.22C7.50578 5.15636 9.21951 4.30265 11.0665 4.08567C12.9136 3.86868 14.7785 4.30198 16.3407 5.31104C17.9028 6.32011 19.0646 7.84191 19.6263 9.61479C20.188 11.3877 20.1145 13.3009 19.4184 15.0254C18.7223 16.7499 17.4472 18.1781 15.8122 19.0643C14.1772 19.9505 12.2845 20.2394 10.4596 19.8813C8.63463 19.5232 6.99147 18.5405 5.81259 17.1022C4.63372 15.6638 3.99279 13.8597 4 12C4 11.7348 3.89464 11.4804 3.70711 11.2929C3.51957 11.1054 3.26522 11 3 11C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 13.9778 2.58649 15.9112 3.6853 17.5557C4.78412 19.2002 6.3459 20.4819 8.17317 21.2388C10.0004 21.9957 12.0111 22.1937 13.9509 21.8079C15.8907 21.422 17.6725 20.4696 19.0711 19.0711C20.4696 17.6725 21.422 15.8907 21.8079 13.9509C22.1937 12.0111 21.9957 10.0004 21.2388 8.17317C20.4819 6.3459 19.2002 4.78412 17.5557 3.6853C15.9112 2.58649 13.9778 2 12 2ZM12 8C11.7348 8 11.4804 8.10536 11.2929 8.29289C11.1054 8.48043 11 8.73478 11 9V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H14C14.2652 13 14.5196 12.8946 14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12C15 11.7348 14.8946 11.4804 14.7071 11.2929C14.5196 11.1054 14.2652 11 14 11H13V9C13 8.73478 12.8946 8.48043 12.7071 8.29289C12.5196 8.10536 12.2652 8 12 8Z"
            fill="white"
        />
    </svg>
)
export const PaymentIcon = () => (
    <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0001 0.5C13.4972 0.5 13.9001 0.902944 13.9001 1.4V2.19126C14.4325 2.25787 14.9121 2.37803 15.3612 2.60686C16.2361 3.05267 16.9475 3.76403 17.3933 4.63898C17.6731 5.18809 17.7904 5.78278 17.846 6.46376C17.9001 7.12585 17.9001 7.94407 17.9001 8.96134V13.0387C17.9001 14.056 17.9001 14.8742 17.846 15.5363C17.7904 16.2173 17.6731 16.812 17.3933 17.3611C16.9475 18.236 16.2361 18.9474 15.3612 19.3932C14.812 19.673 14.2174 19.7903 13.5364 19.846C12.8743 19.9001 12.0561 19.9 11.0388 19.9H6.9614C5.94413 19.9 5.12591 19.9001 4.46382 19.846C3.78284 19.7903 3.18815 19.673 2.63904 19.3932C1.76409 18.9474 1.05273 18.236 0.606918 17.3611C0.327135 16.812 0.209816 16.2173 0.154178 15.5363C0.100082 14.8742 0.100089 14.056 0.100098 13.0387V8.96134C0.100089 7.94407 0.100082 7.12585 0.154178 6.46376C0.209816 5.78278 0.327135 5.18809 0.606918 4.63898C1.05273 3.76403 1.76409 3.05267 2.63904 2.60686C3.08814 2.37803 3.56774 2.25788 4.1001 2.19126V1.4C4.1001 0.902944 4.50304 0.5 5.0001 0.5C5.49715 0.5 5.9001 0.902944 5.9001 1.4V2.10287C6.22743 2.10003 6.58042 2.10003 6.96131 2.10004H6.9614H11.0388H11.0389C11.4198 2.10003 11.7728 2.10003 12.1001 2.10287V1.4C12.1001 0.902944 12.503 0.5 13.0001 0.5ZM4.1001 4.01069V4.6C4.1001 5.09706 4.50304 5.5 5.0001 5.5C5.49715 5.5 5.9001 5.09706 5.9001 4.6V3.903C6.22493 3.90014 6.5886 3.90004 7.0001 3.90004H11.0001C11.4116 3.90004 11.7753 3.90014 12.1001 3.903V4.6C12.1001 5.09706 12.503 5.5 13.0001 5.5C13.4972 5.5 13.9001 5.09706 13.9001 4.6V4.01069C14.1784 4.0596 14.3781 4.12613 14.544 4.21067C15.0802 4.48391 15.5162 4.9199 15.7895 5.45616C15.9184 5.70923 16.0055 6.04067 16.052 6.61033C16.0848 7.01124 16.0952 7.49065 16.0985 8.10004H1.90166C1.90499 7.49065 1.91544 7.01124 1.9482 6.61033C1.99474 6.04067 2.08179 5.70923 2.21073 5.45616C2.48397 4.9199 2.91996 4.48391 3.45622 4.21067C3.62214 4.12613 3.82175 4.0596 4.1001 4.01069ZM1.9001 9.90004H16.1001V13C16.1001 14.065 16.0994 14.8096 16.052 15.3897C16.0055 15.9594 15.9184 16.2908 15.7895 16.5439C15.5162 17.0802 15.0802 17.5162 14.544 17.7894C14.2909 17.9183 13.9595 18.0054 13.3898 18.0519C12.8096 18.0993 12.065 18.1 11.0001 18.1H7.0001C5.93515 18.1 5.19056 18.0993 4.61039 18.0519C4.04073 18.0054 3.70929 17.9183 3.45622 17.7894C2.91996 17.5162 2.48397 17.0802 2.21073 16.5439C2.08179 16.2908 1.99474 15.9594 1.9482 15.3897C1.9008 14.8096 1.9001 14.065 1.9001 13V9.90004ZM12.5001 16C13.3285 16 14.0001 15.3284 14.0001 14.5C14.0001 13.6716 13.3285 13 12.5001 13C11.6717 13 11.0001 13.6716 11.0001 14.5C11.0001 15.3284 11.6717 16 12.5001 16Z"
            fill="white"
        />
    </svg>
)

export const DevicesIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12.71 16.29L12.56 16.17C12.5043 16.1322 12.4437 16.1019 12.38 16.08L12.2 16C12.0378 15.9661 11.8698 15.973 11.7109 16.0201C11.5521 16.0673 11.4074 16.1531 11.29 16.27C11.2017 16.3672 11.1306 16.4788 11.08 16.6C11.0043 16.7822 10.9842 16.9827 11.0223 17.1763C11.0603 17.3699 11.1547 17.5479 11.2937 17.688C11.4327 17.828 11.61 17.9238 11.8033 17.9633C11.9966 18.0028 12.1972 17.9843 12.38 17.91C12.4995 17.852 12.6105 17.778 12.71 17.69C12.8488 17.5494 12.9428 17.3708 12.9801 17.1768C13.0175 16.9828 12.9966 16.7821 12.92 16.6C12.8701 16.4844 12.7989 16.3792 12.71 16.29ZM16 2H8C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V19C5 19.7956 5.31607 20.5587 5.87868 21.1213C6.44129 21.6839 7.20435 22 8 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V5C19 4.20435 18.6839 3.44129 18.1213 2.87868C17.5587 2.31607 16.7956 2 16 2ZM17 19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H8C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V19Z"
            fill="white"
        />
    </svg>
)

export const LockIcon = () => (
    <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5 7C18.8431 7 17.5 8.34315 17.5 10V11.0647C17.208 11.1077 16.9189 11.1839 16.638 11.327C16.0735 11.6146 15.6146 12.0735 15.327 12.638C15.1342 13.0164 15.0629 13.4096 15.0306 13.805C15 14.1795 15 14.6343 15 15.1615L15 15.2V17.8L15 17.8385C15 18.3657 15 18.8205 15.0306 19.195C15.0629 19.5904 15.1342 19.9836 15.327 20.362C15.6146 20.9265 16.0735 21.3854 16.638 21.673C17.0164 21.8658 17.4096 21.9371 17.805 21.9694C18.1795 22 18.6343 22 19.1614 22H19.1615H19.2H21.8H21.8385H21.8386C22.3657 22 22.8205 22 23.195 21.9694C23.5904 21.9371 23.9836 21.8658 24.362 21.673C24.9265 21.3854 25.3854 20.9265 25.673 20.362C25.8658 19.9836 25.9371 19.5904 25.9694 19.195C26 18.8205 26 18.3657 26 17.8385V17.8V15.2V15.1615C26 14.6343 26 14.1795 25.9694 13.805C25.9371 13.4096 25.8658 13.0164 25.673 12.638C25.3854 12.0735 24.9265 11.6146 24.362 11.327C24.0811 11.1839 23.792 11.1077 23.5 11.0647V10C23.5 8.34315 22.1569 7 20.5 7ZM19.2 13C18.6234 13 18.2512 13.0008 17.9678 13.0239C17.6962 13.0461 17.5955 13.0838 17.546 13.109C17.3578 13.2049 17.2049 13.3578 17.109 13.546C17.0838 13.5955 17.0461 13.6962 17.0239 13.9678C17.0008 14.2512 17 14.6234 17 15.2V17.8C17 18.3766 17.0008 18.7488 17.0239 19.0322C17.0461 19.3038 17.0838 19.4045 17.109 19.454C17.2049 19.6422 17.3578 19.7951 17.546 19.891C17.5955 19.9162 17.6962 19.9539 17.9678 19.9761C18.2512 19.9992 18.6234 20 19.2 20H21.8C22.3766 20 22.7488 19.9992 23.0322 19.9761C23.3038 19.9539 23.4045 19.9162 23.454 19.891C23.6422 19.7951 23.7951 19.6422 23.891 19.454C23.9162 19.4045 23.9539 19.3038 23.9761 19.0322C23.9992 18.7488 24 18.3766 24 17.8V15.2C24 14.6234 23.9992 14.2512 23.9761 13.9678C23.9539 13.6962 23.9162 13.5955 23.891 13.546C23.7951 13.3578 23.6422 13.2049 23.454 13.109C23.4045 13.0838 23.3038 13.0461 23.0322 13.0239C22.7488 13.0008 22.3766 13 21.8 13H19.2ZM21.5 11V10C21.5 9.44772 21.0523 9 20.5 9C19.9477 9 19.5 9.44772 19.5 10V11H21.5ZM7.7587 8L7.8 8H14.5C15.0523 8 15.5 8.44772 15.5 9C15.5 9.55228 15.0523 10 14.5 10H7.8C6.94342 10 6.36113 10.0008 5.91104 10.0376C5.47262 10.0734 5.24842 10.1383 5.09202 10.218C4.7157 10.4097 4.40974 10.7157 4.21799 11.092C4.1383 11.2484 4.07337 11.4726 4.03755 11.911C4.00078 12.3611 4 12.9434 4 13.8V14.2C4 15.0566 4.00078 15.6389 4.03755 16.089C4.07337 16.5274 4.1383 16.7516 4.21799 16.908C4.40974 17.2843 4.7157 17.5903 5.09202 17.782C5.24842 17.8617 5.47262 17.9266 5.91104 17.9624C6.36113 17.9992 6.94342 18 7.8 18H12C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20H7.8H7.75873C6.95374 20 6.28938 20 5.74818 19.9558C5.18608 19.9099 4.66937 19.8113 4.18404 19.564C3.43139 19.1805 2.81947 18.5686 2.43598 17.816C2.18868 17.3306 2.09012 16.8139 2.04419 16.2518C1.99998 15.7106 1.99999 15.0463 2 14.2413V14.2413V14.2V13.8V13.7587V13.7587C1.99999 12.9537 1.99998 12.2894 2.04419 11.7482C2.09012 11.1861 2.18868 10.6694 2.43598 10.184C2.81947 9.43139 3.43139 8.81947 4.18404 8.43597C4.66937 8.18868 5.18608 8.09012 5.74818 8.04419C6.28937 7.99998 6.95373 7.99999 7.7587 8ZM12 14C12 14.5523 11.5523 15 11 15C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13C11.5523 13 12 13.4477 12 14ZM7 15C7.55229 15 8 14.5523 8 14C8 13.4477 7.55229 13 7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15ZM21 16.8662V17.5C21 17.7761 20.7761 18 20.5 18C20.2239 18 20 17.7761 20 17.5V16.8662C19.7011 16.6933 19.5 16.3701 19.5 16C19.5 15.4477 19.9477 15 20.5 15C21.0523 15 21.5 15.4477 21.5 16C21.5 16.3701 21.2989 16.6933 21 16.8662Z"
            fill="white"
        />
    </svg>
)

export const BoughtFilmsIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M18 4H6C4.34315 4 3 5.53502 3 7.42857V16.5714C3 18.465 4.34315 20 6 20H18C19.6569 20 21 18.465 21 16.5714V7.42857C21 5.53502 19.6569 4 18 4Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M3 9.71484H21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M7 15.4277H7.01"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M11 15.4277H13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const OrderTableIcon = () => (
    <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M21 7C23.2091 7 25 8.79086 25 11V20C25 22.2091 23.2091 24 21 24H7C4.79086 24 3 22.2091 3 20V11C3 8.79086 4.79086 7 7 7H21ZM21 9H7C5.89543 9 5 9.89543 5 11V20C5 21.1046 5.89543 22 7 22H21C22.1046 22 23 21.1046 23 20V11C23 9.89543 22.1046 9 21 9ZM12.5 12.3204C12.5974 12.3204 12.6927 12.3488 12.7741 12.4022L16.8427 15.0691C17.0737 15.2205 17.1382 15.5305 16.9868 15.7614C16.9466 15.8227 16.8935 15.8743 16.8312 15.9128L12.7626 18.4241C12.5276 18.5691 12.2196 18.4962 12.0745 18.2612C12.0258 18.1823 12 18.0914 12 17.9986V12.8204C12 12.5442 12.2239 12.3204 12.5 12.3204ZM18 3C19.0544 3 19.9182 3.81588 19.9945 4.85074L20 5H8C8 3.89543 8.89543 3 10 3H18Z"
            fill="white"
        />
    </svg>
)

export const TopUpBalance = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9497 4.90289C15.6676 4.81121 15.2876 4.80011 14.1008 4.80011H7.50078C6.64585 4.80011 6.05878 4.80081 5.60368 4.83799C5.15908 4.87432 4.92025 4.94093 4.7474 5.029C4.35226 5.23033 4.031 5.55159 3.82967 5.94673C3.75604 6.09124 3.69741 6.28188 3.65893 6.60033C3.73842 6.60007 3.82287 6.60007 3.91278 6.60007H16.4408C16.776 6.60007 17.0834 6.60007 17.3664 6.60188C17.3511 6.45489 17.3293 6.34735 17.298 6.25117C17.0903 5.61185 16.589 5.11062 15.9497 4.90289ZM3.60078 15.2401L3.60078 12.0001V8.70011L3.60078 8.6841C3.60079 8.57713 3.60084 8.48407 3.60131 8.4006C3.69197 8.40009 3.79396 8.40007 3.91278 8.40007H16.4408C17.4786 8.40007 18.1487 8.40147 18.6587 8.44314C19.1477 8.48309 19.329 8.55091 19.418 8.59626C19.7567 8.76883 20.032 9.0442 20.2046 9.38289C20.2499 9.47189 20.3178 9.65318 20.3577 10.1422C20.3994 10.6522 20.4008 11.3223 20.4008 12.3601V15.2401C20.4008 16.2779 20.3994 16.948 20.3577 17.458C20.3178 17.947 20.2499 18.1283 20.2046 18.2173C20.032 18.5559 19.7567 18.8313 19.418 19.0039C19.329 19.0492 19.1477 19.1171 18.6587 19.157C18.1487 19.1987 17.4786 19.2001 16.4408 19.2001H7.56078C6.52299 19.2001 5.85289 19.1987 5.34289 19.157C4.85389 19.1171 4.6726 19.0492 4.5836 19.0039C4.24491 18.8313 3.96954 18.5559 3.79697 18.2173C3.75162 18.1283 3.6838 17.947 3.64385 17.458C3.60218 16.948 3.60078 16.2779 3.60078 15.2401ZM1.80078 8.66241V8.71207V12.0001V15.2401C1.80078 17.2563 1.80078 18.2644 2.19316 19.0344C2.5383 19.7118 3.08903 20.2626 3.76642 20.6077C4.5365 21.0001 5.54459 21.0001 7.56078 21.0001H16.4408C18.457 21.0001 19.4651 21.0001 20.2351 20.6077C20.9125 20.2626 21.4633 19.7118 21.8084 19.0344C22.2008 18.2644 22.2008 17.2563 22.2008 15.2401V12.3601C22.2008 10.3439 22.2008 9.33579 21.8084 8.56571C21.4633 7.88832 20.9125 7.33759 20.2351 6.99245C19.9344 6.83921 19.5973 6.74582 19.1781 6.6889C19.1545 6.31689 19.1067 5.9927 19.0099 5.69494C18.6241 4.50763 17.6933 3.57677 16.5059 3.19099C15.9155 2.99916 15.2213 2.99953 14.2563 3.00005L14.1008 3.00011L7.46308 3.00011C6.65503 3.0001 5.99418 3.00009 5.4571 3.04397C4.90119 3.08939 4.39911 3.18627 3.93022 3.42518C3.19639 3.79909 2.59976 4.39571 2.22586 5.12955C1.98695 5.59843 1.89006 6.10051 1.84464 6.65643C1.80076 7.1935 1.80077 7.85435 1.80078 8.66239V8.66241ZM15.9008 12.6001C15.4037 12.6001 15.0008 13.0031 15.0008 13.5001C15.0008 13.9972 15.4037 14.4001 15.9008 14.4001H17.1008C17.5978 14.4001 18.0008 13.9972 18.0008 13.5001C18.0008 13.0031 17.5978 12.6001 17.1008 12.6001H15.9008Z"
            fill="white"
        />
    </svg>
)
export const MyCardsIcon = () => (
    <svg
        width="24"
        height="18"
        viewBox="0 0 24 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M4.27867 0.0337887C3.20783 0.193531 2.03366 0.799608 1.34325 1.56073C0.774951 2.1809 0.35225 2.94672 0.12681 3.76422L0 4.23405V9.0028V13.7716L0.12681 14.2414C0.624658 16.0455 1.95382 17.3704 3.76673 17.8731L4.22701 18H12H19.773L20.2427 17.8731C22.0462 17.3751 23.3706 16.0455 23.8732 14.232L24 13.7716V9.0028V4.23405L23.8732 3.77362C23.3706 1.96008 22.0462 0.63047 20.2427 0.132452L19.773 0.00559998L12.1644 0.000900269C7.97965 -0.00379753 4.42896 0.0102978 4.27867 0.0337887ZM19.9937 2.14801C21.1256 2.58965 21.9053 3.57629 21.9898 4.66629L22.018 5.00926H12.0047H1.99609V4.78375C1.99609 4.47366 2.10881 4.06021 2.30137 3.67026C2.59256 3.07827 3.06693 2.59905 3.66341 2.30775C4.31155 1.98827 3.72916 2.00706 12.0939 2.01646L19.6791 2.02586L19.9937 2.14801ZM21.9945 10.3042C21.9804 13.6024 21.9804 13.6353 21.8771 13.936C21.5624 14.8475 20.811 15.5898 19.9139 15.8764L19.5851 15.9797H11.953H4.32094L4.00626 15.8576C3.11389 15.5099 2.48924 14.885 2.14168 13.9924L2.01957 13.6776L2.00548 10.3277L1.99139 6.98254H12H22.0086L21.9945 10.3042Z"
            fill="white"
        />
        <path
            d="M4.94012 11.1169C4.58787 11.2531 4.32016 11.5021 4.14639 11.8545C4.01958 12.1176 3.99609 12.2163 3.99609 12.4982C4.00079 13.8325 5.60236 14.509 6.53699 13.5741C6.84697 13.264 6.9503 12.9962 6.9503 12.5028C6.9503 12.1364 6.93151 12.0471 6.82349 11.8404C6.65441 11.5209 6.29277 11.2014 5.98748 11.1028C5.66811 10.9994 5.22662 11.0041 4.94012 11.1169Z"
            fill="white"
        />
    </svg>
)

export const EditIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M13.92 6.76956L17.232 10.0816L9.29825 18.0074C8.57641 18.7292 7.68829 19.2626 6.71198 19.5607L4.00249 20.3879C3.83794 20.4381 3.66382 20.3455 3.61358 20.1809C3.59548 20.1216 3.59548 20.0583 3.61358 19.999L4.44066 17.2896C4.73877 16.313 5.27227 15.4247 5.99423 14.7028L13.92 6.76956ZM18.6659 4.01168L19.9898 5.33572C20.5025 5.84837 20.5346 6.6597 20.086 7.20971L19.9898 7.31607L18.576 8.72556L15.276 5.42556L16.6856 4.01164C17.2325 3.46485 18.119 3.46487 18.6659 4.01168Z"
            fill="white"
        />
    </svg>
)

// export const UzcardIcon = () => (
//     <svg
//         width="40"
//         height="40"
//         viewBox="0 0 40 40"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//     >
//         <rect width="40" height="40" rx="10" fill="white" fillOpacity="0.24" />
//         <g clipPath="url(#clip0_5416_70671)">
//             <mask
//                 id="mask0_5416_70671"
//                 style="mask-type:alpha"
//                 maskUnits="userSpaceOnUse"
//                 x="11"
//                 y="8"
//                 width="18"
//                 height="24"
//             >
//                 <path d="M11.4286 8H28.5714V32H11.4286V8Z" fill="white" />
//             </mask>
//             <g mask="url(#mask0_5416_70671)">
//                 <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M27.889 18.1211C27.889 21.1067 27.2067 23.3319 25.8428 24.7818C24.4786 26.2314 22.3711 26.9562 19.5298 26.9562C16.8751 26.9562 14.8611 26.2314 13.488 24.7818C12.1142 23.3322 11.4281 21.1458 11.4281 18.223V8.41657C11.4284 8.30617 11.4723 8.20037 11.5504 8.12231C11.6285 8.04425 11.7343 8.00027 11.8447 8H16.6584C16.7687 8.00045 16.8744 8.04448 16.9524 8.12251C17.0305 8.20053 17.0745 8.30623 17.075 8.41657V18.4373C17.075 19.6307 17.2958 20.5493 17.7452 21.1973C18.0817 21.6433 18.5614 21.96 19.1038 22.0941C19.6462 22.2281 20.2182 22.1714 20.7236 21.9334C21.0587 21.7757 21.3534 21.5437 21.5852 21.2549C22.0248 20.647 22.2435 19.7511 22.2422 18.5669V16.6904H27.889V18.1211V18.1211Z"
//                     fill="white"
//                 />
//                 <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M27.453 15.5943H22.243V8.43646C22.2433 8.32079 22.2893 8.20993 22.3711 8.12814C22.4529 8.04634 22.5638 8.00027 22.6794 8H23.4594C23.4603 9.17375 23.9274 10.2991 24.7578 11.1286C25.5884 11.9583 26.7144 12.4244 27.8885 12.4246H27.8898V15.5943H27.453V15.5943Z"
//                     fill="white"
//                 />
//                 <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M24.569 8H27.4534C27.5691 8.00036 27.6799 8.04646 27.7616 8.12823C27.8434 8.21001 27.8895 8.32081 27.8899 8.43646V11.3233C27.0094 11.3231 26.1649 10.9733 25.5422 10.3508C24.9195 9.72827 24.5694 8.88396 24.569 8.00343V8Z"
//                     fill="#F4821F"
//                 />
//                 <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M12.3739 31.7183C13.0112 31.7183 13.3188 31.3638 13.3188 30.843V29.5878H12.8628V30.8303C12.8628 30.9607 12.811 31.0856 12.7189 31.1778C12.6267 31.2699 12.5018 31.3217 12.3715 31.3217C12.2412 31.3217 12.1162 31.2699 12.024 31.1778C11.9319 31.0856 11.8801 30.9607 11.8801 30.8303V29.5878H11.4279V30.8468C11.4279 31.3611 11.7355 31.719 12.3728 31.719L12.3739 31.7183ZM16.0712 31.6806V31.2887H15.0605L16.0496 29.9447V29.5868H14.4766V29.979H15.4657L14.4766 31.3193V31.6793L16.0712 31.6806ZM18.2021 31.7183C18.3815 31.7224 18.5584 31.6764 18.7131 31.5855C18.8678 31.4946 18.994 31.3624 19.0777 31.2037L18.6937 31.0186C18.647 31.1093 18.5764 31.1857 18.4895 31.2393C18.4027 31.2929 18.3028 31.3219 18.2007 31.323C18.0692 31.3164 17.9423 31.2722 17.8352 31.1956C17.728 31.1191 17.6451 31.0134 17.5962 30.8911C17.5473 30.7688 17.5345 30.6351 17.5593 30.5058C17.5841 30.3764 17.6455 30.2569 17.7361 30.1614C17.8579 30.0335 18.0241 29.9571 18.2007 29.9485C18.3026 29.9503 18.4022 29.9795 18.4889 30.033C18.5757 30.0865 18.6464 30.1624 18.6937 30.2526L19.0777 30.0641C18.9942 29.9056 18.8678 29.7737 18.713 29.6834C18.5582 29.5931 18.3812 29.548 18.2021 29.5532C18.0207 29.5479 17.8409 29.5883 17.6792 29.6705C17.5175 29.7528 17.379 29.8744 17.2764 30.0241C17.1739 30.1738 17.1106 30.3468 17.0923 30.5273C17.074 30.7079 17.1013 30.8901 17.1718 31.0573C17.2568 31.2586 17.4007 31.4294 17.5846 31.5474C17.7684 31.6654 17.9837 31.725 18.2021 31.7183ZM22.0969 31.6806L21.2902 29.5878H20.7313L19.9212 31.6806H20.43L20.5616 31.3261H21.4599L21.5885 31.6806H22.0969V31.6806ZM21.3372 30.9339H20.684L21.0108 30.0332L21.3372 30.9339ZM25.1065 32.2059L24.3385 30.8842C24.4758 30.8511 24.597 30.7706 24.6807 30.657C24.7645 30.5433 24.8055 30.4038 24.7966 30.2629C24.8001 30.1709 24.7841 30.0793 24.7497 29.9939C24.7152 29.9086 24.6631 29.8315 24.5967 29.7677C24.5303 29.704 24.4511 29.655 24.3644 29.6241C24.2778 29.5931 24.1855 29.5809 24.0937 29.5882H23.1132V31.6813H23.5589V30.9373H23.8856L24.5943 32.2055L25.1062 32.2059H25.1065ZM24.0276 30.5454H23.5599V29.9807H24.0262C24.066 29.9761 24.1064 29.98 24.1446 29.9921C24.1828 30.0042 24.218 30.0242 24.248 30.0509C24.2779 30.0775 24.3018 30.1102 24.3182 30.1468C24.3346 30.1834 24.3431 30.223 24.3431 30.2631C24.3431 30.3032 24.3346 30.3428 24.3182 30.3794C24.3018 30.416 24.2779 30.4486 24.248 30.4753C24.218 30.502 24.1828 30.522 24.1446 30.5341C24.1064 30.5462 24.066 30.55 24.0262 30.5454H24.0276ZM26.7797 31.6813C27.4359 31.6813 27.8912 31.2671 27.8912 30.6363C27.8912 30.0054 27.4349 29.5882 26.7797 29.5882H25.9541V31.6813H26.7797ZM26.7797 31.2891H26.3998V29.9807H26.7797C26.8675 29.9743 26.9556 29.9869 27.0381 30.0175C27.1206 30.0482 27.1955 30.0962 27.2577 30.1584C27.32 30.2206 27.3681 30.2955 27.3989 30.378C27.4296 30.4604 27.4423 30.5485 27.4359 30.6363C27.4398 30.7234 27.4253 30.8104 27.3936 30.8917C27.3618 30.9729 27.3134 31.0466 27.2515 31.1081C27.1896 31.1695 27.1155 31.2173 27.034 31.2484C26.9525 31.2795 26.8654 31.2933 26.7783 31.2887L26.7797 31.2891V31.2891ZM28.4326 29.5481V29.5535C28.4326 29.6306 28.4098 29.7059 28.367 29.7699C28.3242 29.8339 28.2634 29.8839 28.1922 29.9134C28.1211 29.9428 28.0428 29.9506 27.9673 29.9356C27.8917 29.9206 27.8223 29.8835 27.7678 29.8291C27.7133 29.7746 27.6762 29.7053 27.6612 29.6297C27.6461 29.5542 27.6538 29.4759 27.6832 29.4047C27.7126 29.3336 27.7625 29.2727 27.8265 29.2299C27.8905 29.187 27.9658 29.1641 28.0428 29.1641H28.4323V29.5481H28.4326Z"
//                     fill="white"
//                 />
//             </g>
//         </g>
//         <defs>
//             <clipPath id="clip0_5416_70671">
//                 <rect
//                     width="17.1429"
//                     height="24"
//                     fill="white"
//                     transform="translate(11.4286 8)"
//                 />
//             </clipPath>
//         </defs>
//     </svg>
// )
export const MyCardsEmptyIcon = () => (
    <svg
        width="120"
        height="121"
        viewBox="0 0 120 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_5590_69689)">
            <path
                d="M115.418 22.694L41.9243 7.14057C38.8148 6.48273 35.7328 8.48882 35.075 11.5983L33.6787 20.5713L118.479 38.5163L119.875 29.5433C120.533 26.435 118.528 23.3521 115.418 22.694Z"
                fill="#D9D8E0"
            />
            <path
                d="M84.5122 40.4188C83.6537 37.3274 80.4231 35.5001 77.3327 36.3572L63.3809 40.2304L30.4901 33.2695L26.8728 50.3608L4.27184 56.6338C1.18162 57.4911 -0.645645 60.7217 0.211419 63.8121L12.9484 109.71C13.8068 112.8 17.0376 114.629 20.1278 113.77L93.1887 93.4952C96.2789 92.6368 98.1062 89.4074 97.2491 86.3158L95.0628 78.4365L103.257 80.1689C106.366 80.8279 109.448 78.8218 110.106 75.7124L115.29 51.2147L85.7751 44.969L84.5122 40.4188ZM92.9497 63.746L94.7566 55.2063C95.0279 53.9277 96.2958 53.103 97.5742 53.373L106.114 55.181C107.394 55.4524 108.218 56.7189 107.948 57.9987L106.142 66.5384C105.87 67.817 104.603 68.6429 103.324 68.3717L94.7842 66.5648C93.5032 66.2925 92.6783 65.0246 92.9497 63.746ZM5.54322 61.214L25.762 55.605L73.468 42.3663L78.6015 40.94C78.6953 40.9147 78.7888 40.9027 78.8802 40.9027C79.2919 40.9027 79.7843 41.1729 79.9282 41.6904L80.531 43.861L82.4194 50.6657L7.28402 71.5161L4.79282 62.5419C4.63674 61.9787 4.98027 61.3701 5.54322 61.214ZM92.6675 87.5858C92.7636 87.934 92.6628 88.222 92.5607 88.4022C92.4599 88.5822 92.2654 88.8177 91.9171 88.9136L18.8576 109.189C18.7653 109.214 18.6704 109.227 18.579 109.227C18.1672 109.227 17.6749 108.956 17.5309 108.438L10.1019 81.6669L85.2373 60.8154L89.8199 77.3269L92.6675 87.5858Z"
                fill="#D9D8E0"
            />
            <path
                d="M30.6627 89.4175C30.3122 88.1569 28.9963 87.4126 27.7357 87.762L19.2033 90.1307C17.9438 90.4801 17.1983 91.7971 17.5489 93.0577L19.9164 101.589C20.267 102.85 21.5829 103.594 22.8435 103.243L31.3759 100.876C32.6365 100.526 33.3808 99.2094 33.0314 97.9488L30.6627 89.4175Z"
                fill="#D9D8E0"
            />
        </g>
        <defs>
            <clipPath id="clip0_5590_69689">
                <rect
                    width="120"
                    height="120"
                    fill="white"
                    transform="translate(0 0.5)"
                />
            </clipPath>
        </defs>
    </svg>
)

export const PromoCodeIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14.6997 8.6869C14.8823 8.38245 14.7836 7.98757 14.4792 7.80491C14.1747 7.62224 13.7798 7.72096 13.5972 8.02541L9.21116 15.3356C9.02849 15.64 9.12721 16.0349 9.43166 16.2176C9.73611 16.4002 10.131 16.3015 10.3137 15.997L14.6997 8.6869Z"
            fill="white"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.71422 9.42808C7.71422 8.48131 8.48173 7.7138 9.4285 7.7138C10.3753 7.7138 11.1428 8.48131 11.1428 9.42808V9.85666C11.1428 10.8034 10.3753 11.5709 9.4285 11.5709C8.48173 11.5709 7.71422 10.8034 7.71422 9.85666V9.42808ZM10.0028 9.42808V9.85666C10.0028 10.1738 9.74567 10.4309 9.4285 10.4309C9.11133 10.4309 8.85422 10.1738 8.85422 9.85666V9.42808C8.85422 9.11091 9.11133 8.8538 9.4285 8.8538C9.74567 8.8538 10.0028 9.11091 10.0028 9.42808Z"
            fill="white"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5714 12.4281C13.6246 12.4281 12.8571 13.1956 12.8571 14.1424V14.5709C12.8571 15.5177 13.6246 16.2852 14.5714 16.2852C15.5181 16.2852 16.2856 15.5177 16.2856 14.5709V14.1424C16.2856 13.1956 15.5181 12.4281 14.5714 12.4281ZM15.1456 14.5709V14.1424C15.1456 13.8252 14.8885 13.5681 14.5714 13.5681C14.2542 13.5681 13.9971 13.8252 13.9971 14.1424V14.5709C13.9971 14.8881 14.2542 15.1452 14.5714 15.1452C14.8885 15.1452 15.1456 14.8881 15.1456 14.5709Z"
            fill="white"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.037 2.57271C12.9318 1.42889 11.0986 1.42889 9.99335 2.57271L9.34124 3.2476C9.10672 3.49031 8.77354 3.61158 8.43787 3.5764L7.50451 3.47857C5.92264 3.31277 4.51833 4.49112 4.40692 6.07776L4.34119 7.01392C4.31755 7.3506 4.14027 7.65766 3.86052 7.84647L3.08264 8.37148C1.76428 9.26127 1.44595 11.0666 2.38047 12.3537L2.93187 13.1131C3.13018 13.3862 3.19175 13.7353 3.09881 14.0598L2.84039 14.962C2.40242 16.491 3.31902 18.0786 4.8622 18.4639L5.77273 18.6912C6.10018 18.7729 6.3718 19.0008 6.50916 19.3091L6.89112 20.1663C7.53846 21.6192 9.26111 22.2462 10.6909 21.5493L11.5345 21.1382C11.8379 20.9903 12.1924 20.9903 12.4958 21.1382L13.3394 21.5493C14.7692 22.2462 16.4918 21.6192 17.1392 20.1663L17.5211 19.3091C17.6585 19.0008 17.9301 18.7729 18.2576 18.6912L19.1681 18.4639C20.7113 18.0786 21.6279 16.491 21.1899 14.962L20.9315 14.0598C20.8386 13.7353 20.9001 13.3862 21.0984 13.1131L21.6498 12.3537C22.5844 11.0666 22.266 9.26127 20.9477 8.37148L20.1698 7.84647C19.89 7.65766 19.7128 7.3506 19.6891 7.01392L19.6234 6.07776C19.512 4.49113 18.1077 3.31277 16.5258 3.47857L15.5924 3.5764C15.2568 3.61158 14.9236 3.49031 14.6891 3.2476L14.037 2.57271ZM11.2262 3.76391C11.6575 3.31754 12.3729 3.31754 12.8042 3.76391L13.4563 4.4388C14.0572 5.06075 14.911 5.3715 15.7711 5.28134L16.7045 5.18351C17.3218 5.11881 17.8698 5.57866 17.9133 6.19783L17.979 7.134C18.0396 7.99673 18.4939 8.78357 19.2108 9.2674L19.9886 9.79241C20.5031 10.1396 20.6274 10.8442 20.2627 11.3464L19.7113 12.1058C19.2031 12.8057 19.0453 13.7004 19.2835 14.5318L19.5419 15.434C19.7128 16.0307 19.3551 16.6503 18.7529 16.8006L17.8424 17.0279C17.0033 17.2374 16.3073 17.8214 15.9553 18.6114L15.5733 19.4686C15.3207 20.0356 14.6484 20.2803 14.0905 20.0083L13.2469 19.5972C12.4694 19.2183 11.5609 19.2183 10.7834 19.5972L9.93983 20.0083C9.38187 20.2803 8.70962 20.0356 8.45699 19.4686L8.07504 18.6114C7.72304 17.8214 7.02704 17.2374 6.18793 17.0279L5.2774 16.8006C4.67519 16.6503 4.31749 16.0307 4.48841 15.434L4.74682 14.5318C4.98497 13.7004 4.8272 12.8057 4.31905 12.1058L3.76765 11.3464C3.40296 10.8442 3.52719 10.1396 4.04167 9.79241L4.81954 9.2674C5.5364 8.78357 5.99069 7.99673 6.05126 7.13399L6.117 6.19783C6.16047 5.57866 6.7085 5.11881 7.32581 5.18351L8.25917 5.28134C9.11932 5.3715 9.97309 5.06075 10.574 4.4388L11.2262 3.76391Z"
            fill="white"
        />
    </svg>
)