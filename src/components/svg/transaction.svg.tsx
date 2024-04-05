import { SVGProps } from "components/svg/warning.svg";

export function TransactionSvg({ height = 350, width = 300 }: SVGProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_951_37)">
                <rect width="300" height="300" rx="8" fill="white" />
                <mask id="path-3-inside-1_951_37" fill="white">
                    <path d="M0 0H300V33H0V0Z" />
                </mask>
                <path
                    d="M300 32.5H0V33.5H300V32.5Z"
                    fill="#E5E7EB"
                    mask="url(#path-3-inside-1_951_37)"
                />
                <path
                    d="M9.97869 22H8.34801L12.0121 11.8182H13.7869L17.451 22H15.8203L12.9418 13.6676H12.8622L9.97869 22ZM10.2521 18.0128H15.5419V19.3054H10.2521V18.0128ZM21.5376 22.1491C20.9212 22.1491 20.371 21.9917 19.8871 21.6768C19.4065 21.3587 19.0286 20.9062 18.7536 20.3196C18.4818 19.7296 18.3459 19.022 18.3459 18.1967C18.3459 17.3714 18.4834 16.6655 18.7585 16.0788C19.0369 15.4922 19.4181 15.0431 19.902 14.7315C20.3859 14.42 20.9344 14.2642 21.5476 14.2642C22.0215 14.2642 22.4027 14.3438 22.6911 14.5028C22.9827 14.6586 23.2081 14.8409 23.3672 15.0497C23.5296 15.2585 23.6555 15.4425 23.745 15.6016H23.8345V11.8182H25.321V22H23.8693V20.8118H23.745C23.6555 20.9742 23.5263 21.1598 23.3572 21.3686C23.1915 21.5774 22.9628 21.7597 22.6712 21.9155C22.3795 22.0713 22.0017 22.1491 21.5376 22.1491ZM21.8658 20.8814C22.2933 20.8814 22.6546 20.7687 22.9496 20.5433C23.2479 20.3146 23.4732 19.9981 23.6257 19.5938C23.7815 19.1894 23.8594 18.7187 23.8594 18.1818C23.8594 17.6515 23.7831 17.1875 23.6307 16.7898C23.4782 16.392 23.2545 16.0821 22.9595 15.8601C22.6645 15.638 22.3 15.527 21.8658 15.527C21.4183 15.527 21.0455 15.643 20.7472 15.875C20.4489 16.107 20.2235 16.4235 20.071 16.8246C19.9219 17.2256 19.8473 17.678 19.8473 18.1818C19.8473 18.6922 19.9235 19.1513 20.076 19.5589C20.2285 19.9666 20.4538 20.2898 20.7521 20.5284C21.0537 20.7637 21.425 20.8814 21.8658 20.8814ZM30.3013 22.1491C29.6848 22.1491 29.1346 21.9917 28.6507 21.6768C28.1702 21.3587 27.7923 20.9062 27.5172 20.3196C27.2454 19.7296 27.1096 19.022 27.1096 18.1967C27.1096 17.3714 27.2471 16.6655 27.5222 16.0788C27.8006 15.4922 28.1818 15.0431 28.6657 14.7315C29.1496 14.42 29.6981 14.2642 30.3113 14.2642C30.7852 14.2642 31.1664 14.3438 31.4547 14.5028C31.7464 14.6586 31.9718 14.8409 32.1309 15.0497C32.2933 15.2585 32.4192 15.4425 32.5087 15.6016H32.5982V11.8182H34.0847V22H32.633V20.8118H32.5087C32.4192 20.9742 32.29 21.1598 32.1209 21.3686C31.9552 21.5774 31.7265 21.7597 31.4348 21.9155C31.1432 22.0713 30.7653 22.1491 30.3013 22.1491ZM30.6294 20.8814C31.057 20.8814 31.4183 20.7687 31.7132 20.5433C32.0115 20.3146 32.2369 19.9981 32.3894 19.5938C32.5452 19.1894 32.623 18.7187 32.623 18.1818C32.623 17.6515 32.5468 17.1875 32.3944 16.7898C32.2419 16.392 32.0182 16.0821 31.7232 15.8601C31.4282 15.638 31.0636 15.527 30.6294 15.527C30.182 15.527 29.8091 15.643 29.5108 15.875C29.2125 16.107 28.9872 16.4235 28.8347 16.8246C28.6855 17.2256 28.611 17.678 28.611 18.1818C28.611 18.6922 28.6872 19.1513 28.8397 19.5589C28.9921 19.9666 29.2175 20.2898 29.5158 20.5284C29.8174 20.7637 30.1886 20.8814 30.6294 20.8814ZM39.5286 13.1406V11.8182H47.4086V13.1406H44.2317V22H42.7005V13.1406H39.5286ZM48.2376 22V14.3636H49.6744V15.5767H49.7539C49.8931 15.1657 50.1384 14.8426 50.4897 14.6072C50.8443 14.3686 51.2454 14.2493 51.6928 14.2493C51.7856 14.2493 51.895 14.2526 52.021 14.2592C52.1502 14.2659 52.2513 14.2741 52.3242 14.2841V15.706C52.2646 15.6894 52.1585 15.6712 52.006 15.6513C51.8536 15.6281 51.7011 15.6165 51.5487 15.6165C51.1973 15.6165 50.8841 15.6911 50.609 15.8402C50.3372 15.986 50.1218 16.1899 49.9627 16.4517C49.8036 16.7102 49.7241 17.0052 49.7241 17.3366V22H48.2376ZM55.7646 22.169C55.2807 22.169 54.8432 22.0795 54.4521 21.9006C54.061 21.7183 53.7511 21.4548 53.5224 21.1101C53.297 20.7654 53.1843 20.3428 53.1843 19.8423C53.1843 19.4115 53.2672 19.0568 53.4329 18.7784C53.5986 18.5 53.8223 18.2796 54.104 18.1172C54.3858 17.9548 54.7006 17.8321 55.0487 17.7493C55.3967 17.6664 55.7513 17.6035 56.1126 17.5604C56.57 17.5073 56.9412 17.4643 57.2262 17.4311C57.5112 17.3946 57.7184 17.3366 57.8477 17.2571C57.9769 17.1776 58.0415 17.0483 58.0415 16.8693V16.8345C58.0415 16.4003 57.9189 16.0639 57.6737 15.8253C57.4317 15.5866 57.0704 15.4673 56.5898 15.4673C56.0894 15.4673 55.695 15.5784 55.4066 15.8004C55.1216 16.0192 54.9244 16.2628 54.815 16.5312L53.418 16.2131C53.5837 15.7491 53.8256 15.3745 54.1438 15.0895C54.4653 14.8011 54.8349 14.5923 55.2525 14.4631C55.6701 14.3305 56.1093 14.2642 56.57 14.2642C56.8749 14.2642 57.198 14.3007 57.5394 14.3736C57.8841 14.4432 58.2056 14.5724 58.5039 14.7614C58.8055 14.9503 59.0524 15.2204 59.2447 15.5717C59.4369 15.9197 59.533 16.3722 59.533 16.929V22H58.0813V20.956H58.0217C57.9255 21.1482 57.7814 21.3371 57.5891 21.5227C57.3969 21.7083 57.15 21.8625 56.8484 21.9851C56.5468 22.1077 56.1855 22.169 55.7646 22.169ZM56.0877 20.9759C56.4987 20.9759 56.85 20.8946 57.1417 20.7322C57.4367 20.5698 57.6604 20.3577 57.8129 20.0959C57.9686 19.8307 58.0465 19.5473 58.0465 19.2457V18.2614C57.9935 18.3144 57.8907 18.3641 57.7383 18.4105C57.5891 18.4536 57.4184 18.4917 57.2262 18.5249C57.034 18.5547 56.8467 18.5829 56.6644 18.6094C56.4821 18.6326 56.3297 18.6525 56.207 18.669C55.9187 18.7055 55.6552 18.7668 55.4165 18.853C55.1812 18.9392 54.9923 19.0634 54.8498 19.2259C54.7106 19.3849 54.641 19.5971 54.641 19.8622C54.641 20.2301 54.7769 20.5085 55.0487 20.6974C55.3204 20.883 55.6668 20.9759 56.0877 20.9759ZM62.9995 17.4659V22H61.513V14.3636H62.9398V15.6065H63.0343C63.2099 15.2022 63.485 14.8774 63.8596 14.6321C64.2374 14.3868 64.713 14.2642 65.2864 14.2642C65.8068 14.2642 66.2625 14.3736 66.6536 14.5923C67.0447 14.8078 67.348 15.1293 67.5634 15.5568C67.7788 15.9844 67.8865 16.513 67.8865 17.1428V22H66.4V17.3217C66.4 16.7682 66.2559 16.3357 65.9675 16.0241C65.6792 15.7093 65.2831 15.5518 64.7793 15.5518C64.4346 15.5518 64.128 15.6264 63.8596 15.7756C63.5944 15.9247 63.3839 16.1435 63.2282 16.4318C63.0757 16.7169 62.9995 17.0616 62.9995 17.4659ZM75.6025 16.228L74.2551 16.4666C74.1988 16.2943 74.1093 16.1302 73.9867 15.9744C73.8674 15.8187 73.705 15.6911 73.4995 15.5916C73.294 15.4922 73.0371 15.4425 72.7289 15.4425C72.3079 15.4425 71.9566 15.5369 71.6749 15.7259C71.3932 15.9115 71.2523 16.1518 71.2523 16.4467C71.2523 16.7019 71.3468 16.9074 71.5357 17.0632C71.7246 17.219 72.0295 17.3466 72.4505 17.446L73.6635 17.7244C74.3662 17.8868 74.8899 18.1371 75.2346 18.4751C75.5792 18.8132 75.7516 19.2524 75.7516 19.7926C75.7516 20.25 75.619 20.6577 75.3539 21.0156C75.092 21.3703 74.7258 21.6487 74.2551 21.8509C73.7878 22.053 73.2459 22.1541 72.6294 22.1541C71.7743 22.1541 71.0766 21.9718 70.5364 21.6072C69.9962 21.2393 69.6647 20.7173 69.5421 20.0412L70.9789 19.8224C71.0684 20.197 71.2523 20.4804 71.5307 20.6726C71.8091 20.8615 72.1721 20.956 72.6195 20.956C73.1067 20.956 73.4962 20.8549 73.7878 20.6527C74.0795 20.4472 74.2253 20.197 74.2253 19.902C74.2253 19.6634 74.1358 19.4628 73.9569 19.3004C73.7812 19.138 73.5111 19.0154 73.1465 18.9325L71.8539 18.6491C71.1413 18.4867 70.6143 18.2282 70.2729 17.8736C69.9348 17.5189 69.7658 17.0698 69.7658 16.5263C69.7658 16.0755 69.8917 15.6811 70.1436 15.343C70.3955 15.005 70.7435 14.7415 71.1877 14.5526C71.6318 14.3603 72.1406 14.2642 72.714 14.2642C73.5392 14.2642 74.1889 14.4432 74.6628 14.8011C75.1368 15.1558 75.45 15.6314 75.6025 16.228ZM79.6083 22.169C79.1244 22.169 78.6869 22.0795 78.2958 21.9006C77.9047 21.7183 77.5948 21.4548 77.3661 21.1101C77.1407 20.7654 77.0281 20.3428 77.0281 19.8423C77.0281 19.4115 77.1109 19.0568 77.2766 18.7784C77.4424 18.5 77.6661 18.2796 77.9478 18.1172C78.2295 17.9548 78.5444 17.8321 78.8924 17.7493C79.2404 17.6664 79.5951 17.6035 79.9563 17.5604C80.4137 17.5073 80.7849 17.4643 81.07 17.4311C81.355 17.3946 81.5621 17.3366 81.6914 17.2571C81.8207 17.1776 81.8853 17.0483 81.8853 16.8693V16.8345C81.8853 16.4003 81.7627 16.0639 81.5174 15.8253C81.2755 15.5866 80.9142 15.4673 80.4336 15.4673C79.9331 15.4673 79.5387 15.5784 79.2504 15.8004C78.9653 16.0192 78.7681 16.2628 78.6587 16.5312L77.2617 16.2131C77.4274 15.7491 77.6694 15.3745 77.9876 15.0895C78.3091 14.8011 78.6786 14.5923 79.0962 14.4631C79.5138 14.3305 79.953 14.2642 80.4137 14.2642C80.7186 14.2642 81.0418 14.3007 81.3832 14.3736C81.7279 14.4432 82.0494 14.5724 82.3477 14.7614C82.6493 14.9503 82.8962 15.2204 83.0884 15.5717C83.2807 15.9197 83.3768 16.3722 83.3768 16.929V22H81.9251V20.956H81.8654C81.7693 21.1482 81.6251 21.3371 81.4329 21.5227C81.2406 21.7083 80.9937 21.8625 80.6921 21.9851C80.3905 22.1077 80.0292 22.169 79.6083 22.169ZM79.9315 20.9759C80.3424 20.9759 80.6938 20.8946 80.9854 20.7322C81.2804 20.5698 81.5041 20.3577 81.6566 20.0959C81.8124 19.8307 81.8903 19.5473 81.8903 19.2457V18.2614C81.8372 18.3144 81.7345 18.3641 81.582 18.4105C81.4329 18.4536 81.2622 18.4917 81.07 18.5249C80.8777 18.5547 80.6905 18.5829 80.5082 18.6094C80.3259 18.6326 80.1734 18.6525 80.0508 18.669C79.7624 18.7055 79.4989 18.7668 79.2603 18.853C79.025 18.9392 78.8361 19.0634 78.6935 19.2259C78.5543 19.3849 78.4847 19.5971 78.4847 19.8622C78.4847 20.2301 78.6206 20.5085 78.8924 20.6974C79.1642 20.883 79.5105 20.9759 79.9315 20.9759ZM88.5733 22.1541C87.8342 22.1541 87.1979 21.9867 86.6642 21.652C86.1339 21.3139 85.7263 20.8482 85.4412 20.255C85.1562 19.6617 85.0137 18.9822 85.0137 18.2166C85.0137 17.4411 85.1595 16.7566 85.4512 16.1634C85.7428 15.5668 86.1538 15.1011 86.6841 14.7663C87.2144 14.4316 87.8392 14.2642 88.5584 14.2642C89.1384 14.2642 89.6555 14.3719 90.1096 14.5874C90.5636 14.7995 90.9299 15.0978 91.2083 15.4822C91.49 15.8667 91.6574 16.3158 91.7104 16.8295H90.2637C90.1841 16.4716 90.0018 16.1634 89.7168 15.9048C89.4351 15.6463 89.0572 15.517 88.5833 15.517C88.169 15.517 87.806 15.6264 87.4945 15.8452C87.1863 16.0606 86.946 16.3688 86.7736 16.7699C86.6013 17.1676 86.5151 17.6383 86.5151 18.1818C86.5151 18.7386 86.5996 19.2192 86.7686 19.6236C86.9377 20.0279 87.1763 20.3411 87.4846 20.5632C87.7961 20.7853 88.1623 20.8963 88.5833 20.8963C88.865 20.8963 89.1202 20.8449 89.3489 20.7422C89.5809 20.6361 89.7748 20.4853 89.9306 20.2898C90.0897 20.0942 90.2007 19.8589 90.2637 19.5838H91.7104C91.6574 20.0777 91.4966 20.5185 91.2282 20.9062C90.9597 21.294 90.6001 21.599 90.1493 21.821C89.7019 22.0431 89.1766 22.1541 88.5733 22.1541ZM96.8647 14.3636V15.5568H92.6935V14.3636H96.8647ZM93.8121 12.5341H95.2987V19.7578C95.2987 20.0462 95.3417 20.2633 95.4279 20.4091C95.5141 20.5516 95.6251 20.6494 95.761 20.7024C95.9002 20.7521 96.051 20.777 96.2134 20.777C96.3327 20.777 96.4371 20.7687 96.5266 20.7521C96.6161 20.7356 96.6857 20.7223 96.7354 20.7124L97.0039 21.9403C96.9177 21.9735 96.7951 22.0066 96.636 22.0398C96.4769 22.0762 96.2781 22.0961 96.0394 22.0994C95.6483 22.1061 95.2837 22.0365 94.9457 21.8906C94.6076 21.7448 94.3342 21.5194 94.1254 21.2145C93.9165 20.9096 93.8121 20.5268 93.8121 20.0661V12.5341ZM98.5091 22V14.3636H99.9956V22H98.5091ZM99.2598 13.1854C99.0012 13.1854 98.7792 13.0992 98.5936 12.9268C98.4113 12.7512 98.3201 12.5424 98.3201 12.3004C98.3201 12.0552 98.4113 11.8464 98.5936 11.674C98.7792 11.4983 99.0012 11.4105 99.2598 11.4105C99.5183 11.4105 99.7387 11.4983 99.921 11.674C100.107 11.8464 100.199 12.0552 100.199 12.3004C100.199 12.5424 100.107 12.7512 99.921 12.9268C99.7387 13.0992 99.5183 13.1854 99.2598 13.1854ZM105.212 22.1541C104.496 22.1541 103.871 21.9901 103.338 21.6619C102.804 21.3338 102.39 20.8748 102.095 20.2848C101.8 19.6948 101.652 19.0054 101.652 18.2166C101.652 17.4245 101.8 16.7318 102.095 16.1385C102.39 15.5452 102.804 15.0845 103.338 14.7564C103.871 14.4283 104.496 14.2642 105.212 14.2642C105.928 14.2642 106.553 14.4283 107.086 14.7564C107.62 15.0845 108.034 15.5452 108.329 16.1385C108.624 16.7318 108.772 17.4245 108.772 18.2166C108.772 19.0054 108.624 19.6948 108.329 20.2848C108.034 20.8748 107.62 21.3338 107.086 21.6619C106.553 21.9901 105.928 22.1541 105.212 22.1541ZM105.217 20.9062C105.681 20.9062 106.065 20.7836 106.37 20.5384C106.675 20.2931 106.901 19.9666 107.047 19.5589C107.196 19.1513 107.27 18.7022 107.27 18.2116C107.27 17.7244 107.196 17.277 107.047 16.8693C106.901 16.4583 106.675 16.1286 106.37 15.88C106.065 15.6314 105.681 15.5071 105.217 15.5071C104.75 15.5071 104.362 15.6314 104.054 15.88C103.749 16.1286 103.522 16.4583 103.373 16.8693C103.227 17.277 103.154 17.7244 103.154 18.2116C103.154 18.7022 103.227 19.1513 103.373 19.5589C103.522 19.9666 103.749 20.2931 104.054 20.5384C104.362 20.7836 104.75 20.9062 105.217 20.9062ZM111.917 17.4659V22H110.431V14.3636H111.858V15.6065H111.952C112.128 15.2022 112.403 14.8774 112.778 14.6321C113.155 14.3868 113.631 14.2642 114.204 14.2642C114.725 14.2642 115.18 14.3736 115.572 14.5923C115.963 14.8078 116.266 15.1293 116.481 15.5568C116.697 15.9844 116.805 16.513 116.805 17.1428V22H115.318V17.3217C115.318 16.7682 115.174 16.3357 114.885 16.0241C114.597 15.7093 114.201 15.5518 113.697 15.5518C113.353 15.5518 113.046 15.6264 112.778 15.7756C112.512 15.9247 112.302 16.1435 112.146 16.4318C111.994 16.7169 111.917 17.0616 111.917 17.4659Z"
                    fill="#9CA3AF"
                />
                <rect
                    width="300"
                    height="180"
                    transform="translate(0 43)"
                    fill="white"
                />
                <rect
                    x="10.25"
                    y="53.25"
                    width="279.5"
                    height="23.5"
                    rx="7.75"
                    fill="#F9FAFB"
                    stroke="#E5E7EB"
                    strokeWidth="0.5"
                />
                <rect
                    x="10.25"
                    y="87.25"
                    width="134.5"
                    height="23.5"
                    rx="7.75"
                    fill="#F9FAFB"
                    stroke="#E5E7EB"
                    strokeWidth="0.5"
                />
                <rect
                    x="155.25"
                    y="87.25"
                    width="134.5"
                    height="23.5"
                    rx="7.75"
                    fill="#F9FAFB"
                    stroke="#E5E7EB"
                    strokeWidth="0.5"
                />
                <rect
                    x="10.25"
                    y="121.25"
                    width="279.5"
                    height="23.5"
                    rx="7.75"
                    fill="#F9FAFB"
                    stroke="#E5E7EB"
                    strokeWidth="0.5"
                />
                <rect
                    x="10.25"
                    y="155.25"
                    width="279.5"
                    height="23.5"
                    rx="7.75"
                    fill="#F9FAFB"
                    stroke="#E5E7EB"
                    strokeWidth="0.5"
                />
                <rect
                    x="10.25"
                    y="189.25"
                    width="134.5"
                    height="23.5"
                    rx="7.75"
                    fill="#F9FAFB"
                    stroke="#E5E7EB"
                    strokeWidth="0.5"
                />
                <rect
                    x="155.25"
                    y="189.25"
                    width="134.5"
                    height="23.5"
                    rx="7.75"
                    fill="#F9FAFB"
                    stroke="#E5E7EB"
                    strokeWidth="0.5"
                />
                <mask id="path-14-inside-2_951_37" fill="white">
                    <path d="M0 260H300V300H0V260Z" />
                </mask>
                <path
                    d="M0 260.5H300V259.5H0V260.5Z"
                    fill="#E5E7EB"
                    mask="url(#path-14-inside-2_951_37)"
                />
                <rect
                    x="186.25"
                    y="268.25"
                    width="47.5"
                    height="23.5"
                    rx="3.75"
                    fill="#F9FAFB"
                    stroke="#E5E7EB"
                    strokeWidth="0.5"
                />
                <rect
                    x="244"
                    y="268"
                    width="48"
                    height="24"
                    rx="4"
                    fill="#059669"
                />
            </g>
            <rect
                x="0.25"
                y="0.25"
                width="299.5"
                height="299.5"
                rx="7.75"
                stroke="#E5E7EB"
                strokeWidth="0.5"
            />
            <defs>
                <clipPath id="clip0_951_37">
                    <rect width="300" height="300" rx="8" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
