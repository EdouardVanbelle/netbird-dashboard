import { iconProperties, IconProps } from "@/assets/icons/IconProperties";

export default function ActivityIcon(props: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...iconProperties(props)}
    >
      <path d="M3.99985 4V0.104C3.61426 0.2144 3.25668 0.4112 2.96549 0.7032L0.703174 2.9656C0.411185 3.2568 0.214392 3.6144 0.103996 4H3.99985Z" />
      <path d="M5.3894 8.8488C5.4814 8.3888 5.70539 7.9696 6.03737 7.6376L10.9308 2.744C11.4524 2.2224 12.0987 1.8768 12.7995 1.7128V1.6C12.7995 0.7176 12.1059 0 11.2532 0H5.59979V4C5.59979 4.8824 4.88222 5.6 3.99985 5.6H0V14.4C0 15.2824 0.693574 16 1.54634 16H11.2532C12.1059 16 12.7995 15.2824 12.7995 14.4V11.9256L11.5628 13.1624C11.2308 13.4944 10.8116 13.7184 10.3524 13.8104L7.63651 14.3536C7.48292 14.3848 7.32533 14.4 7.16853 14.4H7.16693C6.53496 14.4 5.94058 14.1536 5.49339 13.7064C4.93102 13.144 4.68942 12.344 4.84542 11.5664L5.3894 8.8488Z" />
      <path d="M7.16853 12.8C7.21813 12.8 7.26933 12.7952 7.31973 12.7848L10.0388 12.2408C10.1876 12.2112 10.3244 12.1376 10.4316 12.0304L15.325 7.1368C16.225 6.2376 16.225 4.7736 15.325 3.8744C14.8746 3.4248 14.2843 3.2 13.6931 3.2C13.1027 3.2 12.5115 3.4248 12.0619 3.8752L7.16853 8.7688C7.06134 8.876 6.98774 9.0128 6.95814 9.1616L6.41416 11.8808C6.36376 12.1328 6.44296 12.3936 6.62455 12.5752C6.77095 12.7208 6.96694 12.8 7.16853 12.8ZM13.1499 4.9624C13.2995 4.8128 13.4971 4.7376 13.6939 4.7376C13.8907 4.7376 14.0875 4.8128 14.2379 4.9624C14.5379 5.2624 14.5379 5.7504 14.2379 6.0504L13.9851 6.3032L12.8971 5.2152L13.1499 4.9624ZM8.42128 9.6912L11.81 6.3016L12.8979 7.3896L9.50844 10.7784L8.14929 11.0504L8.42128 9.6912Z" />
    </svg>
  );
}
