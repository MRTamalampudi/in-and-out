import { SVGProps } from "components/svg/warning.svg";

export function BillSvg({height,width}:SVGProps) {
   return (
       <svg
           width={width}
           height={height}
           viewBox="0 0 500 305"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
       >
           <g clipPath="url(#clip0_961_3470)">
               <rect width="500" height="305" rx="8" fill="white" />
               <mask id="path-3-inside-1_961_3470" fill="white">
                   <path d="M0 0H500V33H0V0Z" />
               </mask>
               <path
                   d="M500 32.5H0V33.5H500V32.5Z"
                   fill="#E5E7EB"
                   mask="url(#path-3-inside-1_961_3470)"
               />
               <path
                   d="M9.97869 22H8.34801L12.0121 11.8182H13.7869L17.451 22H15.8203L12.9418 13.6676H12.8622L9.97869 22ZM10.2521 18.0128H15.5419V19.3054H10.2521V18.0128ZM21.5376 22.1491C20.9212 22.1491 20.371 21.9917 19.8871 21.6768C19.4065 21.3587 19.0286 20.9062 18.7536 20.3196C18.4818 19.7296 18.3459 19.022 18.3459 18.1967C18.3459 17.3714 18.4834 16.6655 18.7585 16.0788C19.0369 15.4922 19.4181 15.0431 19.902 14.7315C20.3859 14.42 20.9344 14.2642 21.5476 14.2642C22.0215 14.2642 22.4027 14.3438 22.6911 14.5028C22.9827 14.6586 23.2081 14.8409 23.3672 15.0497C23.5296 15.2585 23.6555 15.4425 23.745 15.6016H23.8345V11.8182H25.321V22H23.8693V20.8118H23.745C23.6555 20.9742 23.5263 21.1598 23.3572 21.3686C23.1915 21.5774 22.9628 21.7597 22.6712 21.9155C22.3795 22.0713 22.0017 22.1491 21.5376 22.1491ZM21.8658 20.8814C22.2933 20.8814 22.6546 20.7687 22.9496 20.5433C23.2479 20.3146 23.4732 19.9981 23.6257 19.5938C23.7815 19.1894 23.8594 18.7187 23.8594 18.1818C23.8594 17.6515 23.7831 17.1875 23.6307 16.7898C23.4782 16.392 23.2545 16.0821 22.9595 15.8601C22.6645 15.638 22.3 15.527 21.8658 15.527C21.4183 15.527 21.0455 15.643 20.7472 15.875C20.4489 16.107 20.2235 16.4235 20.071 16.8246C19.9219 17.2256 19.8473 17.678 19.8473 18.1818C19.8473 18.6922 19.9235 19.1513 20.076 19.5589C20.2285 19.9666 20.4538 20.2898 20.7521 20.5284C21.0537 20.7637 21.425 20.8814 21.8658 20.8814ZM30.3013 22.1491C29.6848 22.1491 29.1346 21.9917 28.6507 21.6768C28.1702 21.3587 27.7923 20.9062 27.5172 20.3196C27.2454 19.7296 27.1096 19.022 27.1096 18.1967C27.1096 17.3714 27.2471 16.6655 27.5222 16.0788C27.8006 15.4922 28.1818 15.0431 28.6657 14.7315C29.1496 14.42 29.6981 14.2642 30.3113 14.2642C30.7852 14.2642 31.1664 14.3438 31.4547 14.5028C31.7464 14.6586 31.9718 14.8409 32.1309 15.0497C32.2933 15.2585 32.4192 15.4425 32.5087 15.6016H32.5982V11.8182H34.0847V22H32.633V20.8118H32.5087C32.4192 20.9742 32.29 21.1598 32.1209 21.3686C31.9552 21.5774 31.7265 21.7597 31.4348 21.9155C31.1432 22.0713 30.7653 22.1491 30.3013 22.1491ZM30.6294 20.8814C31.057 20.8814 31.4183 20.7687 31.7132 20.5433C32.0115 20.3146 32.2369 19.9981 32.3894 19.5938C32.5452 19.1894 32.623 18.7187 32.623 18.1818C32.623 17.6515 32.5468 17.1875 32.3944 16.7898C32.2419 16.392 32.0182 16.0821 31.7232 15.8601C31.4282 15.638 31.0636 15.527 30.6294 15.527C30.182 15.527 29.8091 15.643 29.5108 15.875C29.2125 16.107 28.9872 16.4235 28.8347 16.8246C28.6855 17.2256 28.611 17.678 28.611 18.1818C28.611 18.6922 28.6872 19.1513 28.8397 19.5589C28.9921 19.9666 29.2175 20.2898 29.5158 20.5284C29.8174 20.7637 30.1886 20.8814 30.6294 20.8814ZM40.0307 22V11.8182H43.7594C44.4819 11.8182 45.0802 11.9375 45.5542 12.1761C46.0281 12.4115 46.3828 12.7313 46.6181 13.1357C46.8534 13.5367 46.9711 13.9891 46.9711 14.4929C46.9711 14.9171 46.8932 15.2751 46.7374 15.5668C46.5816 15.8551 46.3728 16.0871 46.111 16.2628C45.8525 16.4351 45.5674 16.5611 45.2559 16.6406V16.7401C45.5939 16.7566 45.9237 16.866 46.2452 17.0682C46.57 17.267 46.8385 17.5504 47.0506 17.9183C47.2627 18.2862 47.3688 18.7337 47.3688 19.2607C47.3688 19.781 47.2462 20.2483 47.0009 20.6626C46.7589 21.0736 46.3844 21.4001 45.8773 21.642C45.3702 21.8807 44.7222 22 43.9334 22H40.0307ZM41.5669 20.6825H43.7843C44.5201 20.6825 45.0471 20.54 45.3652 20.255C45.6834 19.9699 45.8425 19.6136 45.8425 19.1861C45.8425 18.8646 45.7613 18.5696 45.5989 18.3011C45.4365 18.0327 45.2045 17.8189 44.9029 17.6598C44.6046 17.5007 44.2499 17.4212 43.839 17.4212H41.5669V20.6825ZM41.5669 16.223H43.6252C43.9699 16.223 44.2798 16.1567 44.5549 16.0241C44.8333 15.8916 45.0537 15.706 45.2161 15.4673C45.3818 15.2254 45.4647 14.9403 45.4647 14.6122C45.4647 14.1913 45.3172 13.8383 45.0222 13.5533C44.7272 13.2682 44.2748 13.1257 43.665 13.1257H41.5669V16.223ZM49.0716 22V14.3636H50.5581V22H49.0716ZM49.8223 13.1854C49.5637 13.1854 49.3417 13.0992 49.1561 12.9268C48.9738 12.7512 48.8826 12.5424 48.8826 12.3004C48.8826 12.0552 48.9738 11.8464 49.1561 11.674C49.3417 11.4983 49.5637 11.4105 49.8223 11.4105C50.0808 11.4105 50.3012 11.4983 50.4835 11.674C50.6691 11.8464 50.7619 12.0552 50.7619 12.3004C50.7619 12.5424 50.6691 12.7512 50.4835 12.9268C50.3012 13.0992 50.0808 13.1854 49.8223 13.1854ZM54.0444 11.8182V22H52.5579V11.8182H54.0444ZM57.5307 11.8182V22H56.0442V11.8182H57.5307Z"
                   fill="#9CA3AF"
               />
               <rect
                   width="250"
                   height="202"
                   transform="translate(0 43)"
                   fill="white"
               />
               <rect
                   x="10.25"
                   y="53.25"
                   width="229.5"
                   height="23.5"
                   rx="7.75"
                   fill="#F9FAFB"
                   stroke="#E5E7EB"
                   strokeWidth="0.5"
               />
               <rect
                   x="10.25"
                   y="87.25"
                   width="229.5"
                   height="23.5"
                   rx="7.75"
                   fill="#F9FAFB"
                   stroke="#E5E7EB"
                   strokeWidth="0.5"
               />
               <rect
                   x="10.25"
                   y="121.25"
                   width="229.5"
                   height="23.5"
                   rx="7.75"
                   fill="#F9FAFB"
                   stroke="#E5E7EB"
                   strokeWidth="0.5"
               />
               <rect
                   x="10.25"
                   y="155.25"
                   width="229.5"
                   height="79.5"
                   rx="7.75"
                   fill="#F9FAFB"
                   stroke="#E5E7EB"
                   strokeWidth="0.5"
               />
               <rect
                   width="250"
                   height="202"
                   transform="translate(250 43)"
                   fill="white"
               />
               <rect
                   x="260.25"
                   y="53.25"
                   width="229.5"
                   height="23.5"
                   rx="7.75"
                   fill="#F9FAFB"
                   stroke="#E5E7EB"
                   strokeWidth="0.5"
               />
               <rect
                   x="260.25"
                   y="87.25"
                   width="229.5"
                   height="23.5"
                   rx="7.75"
                   fill="#F9FAFB"
                   stroke="#E5E7EB"
                   strokeWidth="0.5"
               />
               <rect
                   x="260.25"
                   y="121.25"
                   width="229.5"
                   height="23.5"
                   rx="7.75"
                   fill="#F9FAFB"
                   stroke="#E5E7EB"
                   strokeWidth="0.5"
               />
               <rect
                   x="260.25"
                   y="155.25"
                   width="229.5"
                   height="23.5"
                   rx="7.75"
                   fill="#F9FAFB"
                   stroke="#E5E7EB"
                   strokeWidth="0.5"
               />
               <mask id="path-14-inside-2_961_3470" fill="white">
                   <path d="M0 265H500V305H0V265Z" />
               </mask>
               <path
                   d="M0 265.5H500V264.5H0V265.5Z"
                   fill="#E5E7EB"
                   mask="url(#path-14-inside-2_961_3470)"
               />
               <rect
                   x="386.25"
                   y="273.25"
                   width="47.5"
                   height="23.5"
                   rx="3.75"
                   fill="#F9FAFB"
                   stroke="#E5E7EB"
                   strokeWidth="0.5"
               />
               <rect
                   x="444"
                   y="273"
                   width="48"
                   height="24"
                   rx="4"
                   fill="#059669"
               />
           </g>
           <rect
               x="0.25"
               y="0.25"
               width="499.5"
               height="304.5"
               rx="7.75"
               stroke="#E5E7EB"
               strokeWidth="0.5"
           />
           <defs>
               <clipPath id="clip0_961_3470">
                   <rect width="500" height="305" rx="8" fill="white" />
               </clipPath>
           </defs>
       </svg>
   );
}