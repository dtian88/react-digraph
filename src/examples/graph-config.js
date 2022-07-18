// @flow

/*
  Example config for GraphView component
*/
import * as React from 'react';

export const NODE_KEY = 'id'; // Key used to identify nodes

// These keys are arbitrary (but must match the config)
// However, GraphView renders text differently for empty types
// so this has to be passed in if that behavior is desired.
export const OTHER_TYPE = 'other'; // Empty node type
export const POLY_TYPE = 'poly';
export const SPECIAL_TYPE = 'special';
export const SKINNY_TYPE = 'skinny';
export const SPECIAL_CHILD_SUBTYPE = 'specialChild';
export const EMPTY_EDGE_TYPE = 'emptyEdge';
export const SPECIAL_EDGE_TYPE = 'specialEdge';
export const COMPLEX_CIRCLE_TYPE = 'complexCircle';
export const COMPUTER_TYPE = 'computer';
export const FILE_TYPE = 'file';
export const USER_TYPE = 'user';
export const DATABASE_TYPE = 'database';
export const HASH_TYPE = 'hash';
export const ACTION_TYPE = 'action';
export const PROCESS_TYPE = 'process';
export const SERVER_TYPE = 'server';
export const FOLDER_TYPE = 'folder';
export const USER_GROUP_TYPE = 'userGroup';
export const FIREWALL_TYPE = 'firewall';
export const NETWORK_TYPE = 'network';
export const MALWARE_TYPE = 'malware';
export const INTERNET_TYPE = 'internet';
export const EMAIL_TYPE = 'email';
export const THREAT_ACTOR_TYPE = 'threatActor';

export const nodeTypes = [
  OTHER_TYPE,
  POLY_TYPE,
  SPECIAL_TYPE,
  SKINNY_TYPE,
  COMPUTER_TYPE,
  FILE_TYPE,
  USER_TYPE,
  DATABASE_TYPE,
  HASH_TYPE,
  ACTION_TYPE,
  PROCESS_TYPE,
  SERVER_TYPE,
  FOLDER_TYPE,
  USER_GROUP_TYPE,
  FIREWALL_TYPE,
  NETWORK_TYPE,
  MALWARE_TYPE,
  INTERNET_TYPE,
  EMAIL_TYPE,
  THREAT_ACTOR_TYPE,
];
export const edgeTypes = [EMPTY_EDGE_TYPE, SPECIAL_EDGE_TYPE];

const EmptyNodeShape = (
  <symbol viewBox="0 0 154 154" width="154" height="154" id="emptyNode">
    <circle cx="77" cy="77" r="76" />
  </symbol>
);

const OtherShape = (
  <symbol viewBox="0 0 98 98" width="98" height="98" id="other">
    <circle cx="49" cy="49" r="48" stroke="transparent" />
    <path
      d="M49 97.02C22.52 97.02.98 75.48.98 49 .98 22.52 22.52.98 49 .98 75.47.98 97.02 22.52 97.02 49c0 26.48-21.54 48.02-48.02 48.02Z
    m0-92.002C24.745 5.018 5.018 24.745 5.018 49S24.745 92.982 49.01 92.982c24.255 0 43.982-19.727 43.982-43.982C92.982 24.745 73.255 5.018 49 5.018Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
  </symbol>
);

const SpecialShape = (
  <symbol viewBox="-27 0 154 154" id="special" width="154" height="154">
    <rect transform="translate(50) rotate(45)" width="109" height="109" />
  </symbol>
);

const PolyShape = (
  <symbol viewBox="0 0 88 72" id="poly" width="88" height="88">
    <path d="M 0 36 18 0 70 0 88 36 70 72 18 72Z" />
  </symbol>
);

const ComplexCircleShape = (
  <symbol viewBox="0 0 100 100" id="complexCircle" width="100" height="100">
    <circle cx="50" cy="50" r="50" fill="transparent" stroke="transparent" />
    <circle cx="50" cy="50" r="34" />
    <path
      d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,90A40,40,0,1,1,90,50,40,40,0,0,1,50,90Z"
      data-intersect-ignore="true"
    />
  </symbol>
);

const SkinnyShape = (
  <symbol viewBox="0 0 154 54" width="154" height="54" id="skinny">
    <rect x="0" y="0" rx="2" ry="2" width="154" height="54" />
  </symbol>
);

const ComputerShape = (
  <symbol
    viewBox="-0.5 18.83 144.2 105.5"
    id="computer"
    width="144.2"
    height="105.5"
  >
    <rect
      x="-0.5"
      y="18.83"
      rx="3.5"
      ry="3.5"
      width="144.2"
      height="105.5"
      fill="transparent"
      stroke="transparent"
    />
    <path
      d="M143.265 22.049v99.18a2.709 2.709 0 0 1-2.706 2.697h-39.115a2.7 2.7 0 0 1-2.701-2.702V22.049a2.705 2.705 0 0 1 2.701-2.706h39.115a2.708 2.708 0 0 1 2.706 2.706Z
            m-5.407 2.693h-33.716v93.781h33.716V24.742Z
            m-3.264 33.25h-27.193v4.196h27.193v-4.196Z
            m-4.424 31.294a8.726 8.726 0 0 1-8.729 8.737 8.73 8.73 0 0 1-8.737-8.737c0-4.82 3.913-8.733 8.737-8.733 4.821 0 8.729 3.917 8.729 8.733Z
            m-3.151 0a5.585 5.585 0 0 0-11.168 0 5.58 5.58 0 0 0 5.586 5.578 5.579 5.579 0 0 0 5.582-5.578Z
            M91.313 38.37v56.215c0 3.388-2.727 6.131-6.081 6.131h-30.37s-1.723 12.271 9.207 12.271v6.14H27.248v-6.132c10.527 0 9.207-12.271 9.207-12.271H6.098c-3.367 0-6.098-2.743-6.098-6.13V38.37c0-3.388 2.73-6.119 6.098-6.119h79.13c3.358 0 6.085 2.73 6.085 6.119Z
            m-39.98 54.845a5.258 5.258 0 0 0-5.262-5.257 5.263 5.263 0 0 0-5.27 5.257 5.267 5.267 0 0 0 5.27 5.266c2.91 0 5.261-2.36 5.261-5.266Z
            m91.932-71.166v99.18a2.709 2.709 0 0 1-2.706 2.697h-39.115a2.7 2.7 0 0 1-2.701-2.702V22.049a2.705 2.705 0 0 1 2.701-2.706h39.115a2.708 2.708 0 0 1 2.706 2.706Z
            M51.332 93.215a5.258 5.258 0 0 0-5.261-5.257 5.263 5.263 0 0 0-5.27 5.257 5.267 5.267 0 0 0 5.27 5.266c2.91 0 5.261-2.36 5.261-5.266Z"
      stroke="transparent"
    />
    <path
      d="M134.594 48.31h-27.193v-4.2h27.193v4.2Z
            m0 2.739h-27.193v4.208h27.193V51.05Z
            m-.016-19.052h-27.152v9.254h27.152v-9.254Z
            m8.687-9.948v99.18a2.709 2.709 0 0 1-2.706 2.697h-39.115a2.7 2.7 0 0 1-2.701-2.702V22.049a2.705 2.705 0 0 1 2.701-2.706h39.115a2.708 2.708 0 0 1 2.706 2.706Z
            m-5.407 2.693h-33.716v93.781h33.716V24.742Z
            m-3.264 33.25h-27.193v4.196h27.193v-4.196Z
            m-4.424 31.294a8.726 8.726 0 0 1-8.729 8.737 8.73 8.73 0 0 1-8.737-8.737c0-4.82 3.913-8.733 8.737-8.733 4.821 0 8.729 3.917 8.729 8.733Z
            m-3.151 0a5.585 5.585 0 0 0-11.168 0 5.58 5.58 0 0 0 5.586 5.578 5.579 5.579 0 0 0 5.582-5.578Z
            M91.313 38.37v56.215c0 3.388-2.727 6.131-6.081 6.131h-30.37s-1.723 12.271 9.207 12.271v6.14H27.248v-6.132c10.527 0 9.207-12.271 9.207-12.271H6.098c-3.367 0-6.098-2.743-6.098-6.13V38.37c0-3.388 2.73-6.119 6.098-6.119h79.13c3.358 0 6.085 2.73 6.085 6.119Z
            m-39.98 54.845a5.258 5.258 0 0 0-5.262-5.257 5.263 5.263 0 0 0-5.27 5.257 5.267 5.267 0 0 0 5.27 5.266c2.91 0 5.261-2.36 5.261-5.266Z
            m33.462-54.458H6.527v47.398h78.268V38.757Z
            m-38.67 51.166a3.268 3.268 0 1 0 0 6.535 3.268 3.268 0 0 0 0-6.535Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
  </symbol>
);

const FileShape = (
  // <symbol viewBox="15 -0.49 102.8 133.6" id="file" width="102.8" height="133.6">
  //   <rect
  //     x="15"
  //     y="-0.49"
  //     width="102.8"
  //     height="133.6"
  //     fill="transparent"
  //     stroke="transparent"
  //   />
  //   <path d="M86.4935 0 15.4074 0 15.4074 133 117.593 133 117.593 31.3275 86.4935 0ZM88.073 9.27438 108.386 29.7361 88.073 29.7361 88.073 9.27438ZM20.8204 127.587 20.8204 5.41306 82.66 5.41306 82.66 35.1492 112.18 35.1492 112.18 127.587 20.8204 127.587 20.8204 127.587Z" />
  //   <path d="M31.1919 29.7361 75.173 29.7361 75.173 35.1492 31.1919 35.1492Z" />
  //   <path d="M31.1919 54.5355 101.809 54.5355 101.809 59.9486 31.1919 59.9486Z" />
  //   <path d="M31.1919 79.3349 101.809 79.3349 101.809 84.748 31.1919 84.748Z" />
  //   <path d="M31.1919 104.134 101.809 104.134 101.809 109.547 31.1919 109.547Z" />
  // </symbol>
  <symbol viewBox="0 0 46 60" id="file" width="46" height="60">
    <path
      d="M0 0 0 60 46 60 46 17 29 0Z"
      fill="transparent"
      stroke="transparent"
    />
    <path
      d="M64.382 0H11.47v99h76.063V23.319L64.382 0Z"
      stroke="transparent"
      transform="scale(0.6 0.6) translate(-11.2 0.5)"
    />
    <path
      d="M64.382 0H11.47v99h76.063V23.319L64.382 0Z
            m1.176 6.903 15.12 15.231h-15.12V6.904Z
            m-50.06 88.068V4.029h46.03v22.135h21.974V94.97H15.498Z
            m7.72-72.837h32.738v4.03H23.218Z
            m0 18.46h52.564v4.03H23.218Z
            m0 18.46h52.564v4.03H23.218Z
            m0 18.46h52.564v4.029H23.218Z"
      fill="#000000"
      stroke="transparent"
      transform="scale(0.6 0.6) translate(-11.2 0.5)"
      file-intersect-ignore="true"
    />
  </symbol>
);

const UserShape = (
  <symbol viewBox="0 0 98 98" id="user" width="54" height="54">
    <circle cx="49" cy="49" r="48" stroke="transparent" />
    <path
      d="M49 97.02C22.52 97.02.98 75.48.98 49 .98 22.52 22.52.98 49 .98 75.47.98 97.02 22.52 97.02 49c0 26.48-21.54 48.02-48.02 48.02Z
            m0-92.002C24.745 5.018 5.018 24.745 5.018 49S24.745 92.982 49.01 92.982c24.255 0 43.982-19.727 43.982-43.982C92.982 24.745 73.255 5.018 49 5.018Z
            m0 49.803c-10.731 0-19.463-8.732-19.463-19.472 0-10.731 8.732-19.463 19.463-19.463 10.731 0 19.463 8.732 19.463 19.463 0 10.74-8.732 19.472-19.463 19.472Z
            m0-34.898c-8.506 0-15.425 6.92-15.425 15.435 0 8.517 6.919 15.435 15.425 15.435s15.435-6.918 15.435-15.435c-.01-8.516-6.929-15.435-15.435-15.435Z
            m30.645 65.425a2.016 2.016 0 0 1-2.02-2.019C77.626 67.6 64.789 54.802 49 54.802c-15.778 0-28.616 12.798-28.616 28.527a2.016 2.016 0 0 1-2.019 2.02 2.016 2.016 0 0 1-2.019-2.02c0-17.953 14.651-32.565 32.654-32.565 18.003 0 32.663 14.612 32.663 32.565a2.029 2.029 0 0 1-2.018 2.02Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
  </symbol>
);

const DatabaseShape = (
  <symbol viewBox="7 -1 84 100" id="database" width="84" height="100">
    <rect
      x="7"
      y="-1"
      width="84"
      height="100"
      fill="transparent"
      stroke="transparent"
    />
    <path
      d="M49 0C26.105 0 8.167 8.073 8.167 18.375v61.25C8.167 89.927 26.105 98 49 98s40.833-8.073 40.833-18.375v-61.25C89.833 8.073 71.895 0 49 0Z"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <path
      d="M49 0C26.105 0 8.167 8.073 8.167 18.375v61.25C8.167 89.927 26.105 98 49 98s40.833-8.073 40.833-18.375v-61.25C89.833 8.073 71.895 0 49 0Z
            m36.75 79.625c0 6.758-15.092 14.292-36.75 14.292s-36.75-7.534-36.75-14.292V67.302C18.796 73.434 32.605 77.583 49 77.583c16.394 0 30.204-4.148 36.75-10.281v12.323Z
            m0-20.417C85.75 65.966 70.658 73.5 49 73.5s-36.75-7.534-36.75-14.292V46.885C18.796 53.018 32.605 57.167 49 57.167c16.394 0 30.204-4.15 36.75-10.282v12.323Z
            m0-20.416c0 6.758-15.092 14.291-36.75 14.291s-36.75-7.533-36.75-14.29V26.468C18.796 32.601 32.605 36.75 49 36.75c16.394 0 30.204-4.149 36.75-10.282v12.324Z
            M49 32.667c-21.658 0-36.75-7.534-36.75-14.292S27.342 4.083 49 4.083s36.75 7.534 36.75 14.292S70.658 32.667 49 32.667Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
  </symbol>
);

const HashShape = (
  <symbol
    viewBox="0 0 46.5588 48.5004"
    id="hash"
    width="46.5588"
    height="48.5004"
  >
    <path
      d="M0 48.5004 4.848 0 46.5588 0 41.7108 48.5004Z"
      stroke="transparent"
    />
    <path
      d="M32.332 24.25h16.167L50.924 0h8.083l-2.425 24.25h18.592l-.808 8.084H55.774L54.157 48.5h16.975l-.808 8.084H53.349l-2.425 24.25h-8.083l2.425-24.25H29.099l-2.425 24.25h-8.083l2.425-24.25H2.424l.808-8.084h18.592l1.617-16.166H6.466l.808-8.084h16.975L26.674 0h8.083Z"
      stroke="transparent"
      transform="scale(0.6 0.6)"
      data-intersect-ignore="true"
    />
    <path
      d="M31.524 32.334 29.907 48.5h16.167l1.617-16.166H31.524Z"
      stroke="transparent"
      transform="scale(0.6 0.6)"
      data-intersect-ignore="true"
    />
    <path
      d="M31.524 32.334 29.907 48.5h16.167l1.617-16.166H31.524Z
            m.808-8.084h16.167L50.924 0h8.083l-2.425 24.25h18.592l-.808 8.084H55.774L54.157 48.5h16.975l-.808 8.084H53.349l-2.425 24.25h-8.083l2.425-24.25H29.099l-2.425 24.25h-8.083l2.425-24.25H2.424l.808-8.084h18.592l1.617-16.166H6.466l.808-8.084h16.975L26.674 0h8.083Z"
      fill="#000000"
      stroke="transparent"
      transform="scale(0.6 0.6)"
      data-intersect-ignore="true"
    />
  </symbol>
);

const ActionShape = (
  <symbol viewBox="0 0 98 98" id="action" width="54" height="54">
    <circle cx="49" cy="49" r="48" stroke="transparent" />
    <path
      d="M27.738 23.687v50.625L79.841 49 27.74 23.687Z
            m3.92 6.263L70.873 49 31.659 68.049V29.95Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <path
      d="M49 0C21.981 0 0 21.981 0 49s21.981 49 49 49 49-21.981 49-49S76.019 0 49 0Z
            m0 94.08C24.142 94.08 3.92 73.857 3.92 49S24.142 3.92 49 3.92c24.858 0 45.08 20.223 45.08 45.08S73.858 94.08 49 94.08Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
  </symbol>
);

const ProcessShape = (
  <symbol viewBox="0 0 98 98" id="process" width="54" height="54">
    <circle cx="49" cy="49" r="48" fill="transparent" stroke="transparent" />
    <path
      d="M98 56.335v-14.67l-10.642-1.814a38.992 38.992 0 0 0-4.772-11.5l6.248-8.814L78.46 9.165l-8.814 6.249a38.958 38.958 0 0 0-11.5-4.774L56.333 0H41.665l-1.814 10.64a38.992 38.992 0 0 0-11.5 4.772l-8.814-6.248L9.164 19.537l6.25 8.814a38.958 38.958 0 0 0-4.774 11.5L0 41.665v14.67l10.64 1.812a38.958 38.958 0 0 0 4.774 11.5l-6.25 8.814 10.373 10.373 8.814-6.248a39.028 39.028 0 0 0 11.5 4.774L41.665 98h14.668l1.814-10.64a39.023 39.023 0 0 0 11.5-4.774l8.814 6.248L88.834 78.46l-6.248-8.814a38.95 38.95 0 0 0 4.772-11.5L98 56.335Z"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <path
      d="M98 56.335v-14.67l-10.642-1.814a38.992 38.992 0 0 0-4.772-11.5l6.248-8.814L78.46 9.165l-8.814 6.249a38.958 38.958 0 0 0-11.5-4.774L56.333 0H41.665l-1.814 10.64a38.992 38.992 0 0 0-11.5 4.772l-8.814-6.248L9.164 19.537l6.25 8.814a38.958 38.958 0 0 0-4.774 11.5L0 41.665v14.67l10.64 1.812a38.958 38.958 0 0 0 4.774 11.5l-6.25 8.814 10.373 10.373 8.814-6.248a39.028 39.028 0 0 0 11.5 4.774L41.665 98h14.668l1.814-10.64a39.023 39.023 0 0 0 11.5-4.774l8.814 6.248L88.834 78.46l-6.248-8.814a38.95 38.95 0 0 0 4.772-11.5L98 56.335Z
            m-14.195-.286a35.085 35.085 0 0 1-5.216 12.568l-.744 1.122 5.878 8.29-5.694 5.694-8.29-5.878-1.122.744a35.152 35.152 0 0 1-12.568 5.218l-1.318.266-1.706 10.007h-8.052l-1.706-10.007-1.318-.266A35.146 35.146 0 0 1 29.38 78.59l-1.122-.744-8.29 5.878-5.694-5.694 5.878-8.29-.744-1.12a35.157 35.157 0 0 1-5.216-12.57l-.266-1.318L3.92 53.027v-8.054l10.007-1.706.266-1.318a35.154 35.154 0 0 1 5.216-12.57l.744-1.12-5.878-8.29 5.694-5.694 8.29 5.878 1.122-.744a35.112 35.112 0 0 1 12.568-5.216l1.318-.266L44.973 3.92h8.052l1.706 10.007 1.318.266a35.152 35.152 0 0 1 12.57 5.216l1.12.744 8.29-5.878 5.694 5.694-5.878 8.29.744 1.122a35.112 35.112 0 0 1 5.216 12.568l.266 1.319 10.009 1.705v8.054l-10.01 1.704-.266 1.318Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <path
      d="M49 27.771c-11.706 0-21.229 9.523-21.229 21.229 0 11.705 9.523 21.227 21.229 21.227 11.705 0 21.227-9.523 21.227-21.227 0-11.706-9.523-21.229-21.227-21.229Z
            m0 38.536c-9.543 0-17.309-7.764-17.309-17.307S39.457 31.691 49 31.691c9.543 0 17.307 7.766 17.307 17.309 0 9.543-7.764 17.307-17.307 17.307Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
  </symbol>
);

const ServerShape = (
  <symbol viewBox="0 0 98 98" id="server" width="98" height="98">
    <rect
      x="0"
      y="0"
      width="98"
      height="98"
      fill="transparent"
      stroke="transparent"
    />
    <path
      d="M98 44.246V0H0v44.246h14.003v9.508H0V98h98V53.754H83.997v-9.508H98Z"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <path
      d="M98 44.246V0H0v44.246h14.003v9.508H0V98h98V53.754H83.997v-9.508H98Z
            m-3.92 13.427V94.08H3.92V57.673h90.16Z
            m-76.157-3.92v-9.507h62.154v9.508H17.923Z
            M3.92 40.328V3.92h90.16v36.406H3.92Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <path
      d="M67.151 65.053c-6.389 0-11.587 4.855-11.587 10.823S60.761 86.7 67.15 86.7c6.391 0 11.59-4.856 11.59-10.824s-5.199-10.823-11.59-10.823Z
            m0 17.727c-4.228 0-7.668-3.097-7.668-6.904 0-3.806 3.44-6.903 7.668-6.903s7.67 3.097 7.67 6.903c0 3.807-3.442 6.904-7.67 6.904Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <path
      d="M12.097 68.64h27.07v3.919h-27.07Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <path
      d="M12.097 79.184h27.07v3.92h-27.07Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <path
      d="M67.151 11.3c-6.389 0-11.587 4.855-11.587 10.824 0 5.968 5.198 10.823 11.587 10.823 6.391 0 11.59-4.855 11.59-10.823S73.542 11.3 67.15 11.3Z
            m0 17.727c-4.228 0-7.668-3.097-7.668-6.903 0-3.807 3.44-6.904 7.668-6.904s7.67 3.097 7.67 6.904c0 3.806-3.442 6.903-7.67 6.903Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <path
      d="M12.097 14.89h27.07v3.92h-27.07Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <path
      d="M12.097 25.437h27.07v3.92h-27.07Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
  </symbol>
);

const FolderShape = (
  <symbol viewBox="0 0 63 56.6" id="folder" width="63.5" height="56.6">
    <path
      d="M28 7 23 0 0 0 0 57 64 57 64 7Z"
      fill="transparent"
      stroke="transparent"
    />
    <path
      d="M46.86 18.55 38.703 7.153l-.692-.97H0v93.634h106V18.55H46.86Z"
      stroke="transparent"
      transform="scale(0.6 0.6) translate(0 -6)"
      data-intersect-ignore="true"
    />
    <path
      d="M46.86 18.55 38.703 7.153l-.692-.97H0v93.634h106V18.55H46.86Z
            m55.607 3.533v8.834H55.714l-6.323-8.834h53.076Z
            m-98.934 74.2V9.717H36.19l8.834 12.366h.02l8.286 11.574c.345.48.886.737 1.437.738v.055h47.7v61.833H3.533Z"
      fill="#000000"
      stroke="transparent"
      transform="scale(0.6 0.6) translate(0 -6)"
      data-intersect-ignore="true"
    />
    <path
      d="M33.567 53.883H58.3V50.35H33.567v3.533Z"
      fill="#000000"
      stroke="transparent"
      transform="scale(0.6 0.6) translate(0 -6)"
      data-intersect-ignore="true"
    />
    <path
      d="M33.567 60.95v3.533h38.866V60.95Z"
      fill="#000000"
      stroke="transparent"
      transform="scale(0.6 0.6) translate(0 -6)"
      data-intersect-ignore="true"
    />
    <path
      d="M33.567 71.55v3.533h38.866V71.55Z"
      fill="#000000"
      stroke="transparent"
      transform="scale(0.6 0.6) translate(0 -6)"
      data-intersect-ignore="true"
    />
    {/* <path d="M33.5667 53.8833 58.3 53.8833C59.2752 53.8833 60.0667 53.0936 60.0667 52.1167 60.0667 51.1397 59.2752 50.35 58.3 50.35L33.5667 50.35C32.5915 50.35 31.8 51.1397 31.8 52.1167 31.8 53.0936 32.5915 53.8833 33.5667 53.8833Z" fill="#000000" stroke="transparent" data-intersect-ignore="true"/>   // curved lines in folder
    <path d="M72.4333 60.95 33.5667 60.95C32.5915 60.95 31.8 61.7397 31.8 62.7167 31.8 63.6936 32.5915 64.4833 33.5667 64.4833L72.4333 64.4833C73.4085 64.4833 74.2 63.6936 74.2 62.7167 74.2 61.7397 73.4085 60.95 72.4333 60.95Z" fill="#000000" stroke="transparent" data-intersect-ignore="true"/>
    <path d="M72.4333 71.55 33.5667 71.55C32.5915 71.55 31.8 72.3397 31.8 73.3167 31.8 74.2936 32.5915 75.0833 33.5667 75.0833L72.4333 75.0833C73.4085 75.0833 74.2 74.2936 74.2 73.3167 74.2 72.3397 73.4085 71.55 72.4333 71.55Z" fill="#000000" stroke="transparent" data-intersect-ignore="true"/> */}
  </symbol>
);
//<svg viewBox="-0.4 3.5 63.6 56.6" id="folder" width="63.6" height="56.6">
const UserGroupShape = (
  <symbol viewBox="0 0 97 97" id="userGroup" width="97" height="97">
    <circle cx="48.5" cy="48.5" r="47.5" stroke="transparent" />
    <path
      d="M40.531 32.736c0 6.481-5.269 11.75-11.745 11.75-6.476 0-11.745-5.269-11.745-11.75 0-6.476 5.27-11.745 11.745-11.745 6.476 0 11.745 5.269 11.745 11.745Z
            m-2.705.006c0-4.991-4.055-9.046-9.04-9.046-4.985 0-9.04 4.055-9.045 9.046 0 4.99 4.06 9.045 9.045 9.045s9.04-4.055 9.04-9.045Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <mask id="a" maskUnits="userSpaceOnUse" x="9" y="41" width="29" height="23">
      <path
        fill="#D9D9D9"
        stroke="transparent"
        data-intersect-ignore="true"
        d="M9.177 41.846h28.454v21.155H9.177z"
      />
    </mask>
    <g mask="url(#a)">
      <path
        d="M9.176 61.322v-.002c0-10.779 8.802-19.55 19.61-19.55 10.807 0 19.603 8.771 19.603 19.55a1.35 1.35 0 0 1-1.353 1.353 1.351 1.351 0 0 1-1.352-1.352c0-9.288-7.581-16.846-16.898-16.846-9.324 0-16.904 7.558-16.904 16.846a1.35 1.35 0 0 1-1.353 1.352 1.359 1.359 0 0 1-1.353-1.351Z"
        fill="#000000"
        stroke="transparent"
        data-intersect-ignore="true"
      />
    </g>
    <path
      d="M80.205 32.595c0 6.482-5.27 11.75-11.745 11.75-6.476 0-11.745-5.268-11.745-11.75 0-6.476 5.27-11.745 11.745-11.745 6.476 0 11.745 5.27 11.745 11.745Z
            m-2.706.006c0-4.991-4.054-9.046-9.039-9.046-4.985 0-9.04 4.055-9.045 9.046 0 4.99 4.06 9.045 9.045 9.045s9.04-4.054 9.04-9.045Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <mask
      id="b"
      maskUnits="userSpaceOnUse"
      x="58"
      y="41"
      width="32"
      height="23"
    >
      <path
        fill="#D9D9D9"
        stroke="transparent"
        data-intersect-ignore="true"
        d="M58.85 41.85h30.3v21.3h-30.3z"
      />
    </mask>
    <g mask="url(#b)">
      <path
        d="M48.85 61.18c0-10.78 8.802-19.551 19.61-19.551 10.807 0 19.603 8.772 19.603 19.55a1.35 1.35 0 0 1-1.353 1.353 1.351 1.351 0 0 1-1.353-1.352c0-9.288-7.58-16.846-16.897-16.846-9.324 0-16.904 7.558-16.904 16.846 0 .748-.605 1.352-1.353 1.352a1.359 1.359 0 0 1-1.353-1.351Z"
        fill="#000000"
        stroke="transparent"
        data-intersect-ignore="true"
      />
    </g>
    <path
      d="M60.344 44.206c0 6.482-5.27 11.751-11.745 11.751-6.476 0-11.745-5.27-11.745-11.75 0-6.477 5.269-11.746 11.745-11.746 6.476 0 11.745 5.27 11.745 11.745Z
            m-2.706.006c0-4.99-4.055-9.045-9.04-9.045-4.984 0-9.039 4.054-9.045 9.045 0 4.99 4.06 9.045 9.046 9.045 4.984 0 9.04-4.054 9.04-9.045Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <path
      d="M28.99 72.792v-.001c0-10.78 8.801-19.551 19.608-19.551 10.808 0 19.604 8.772 19.604 19.55a1.35 1.35 0 0 1-1.353 1.353 1.35 1.35 0 0 1-1.353-1.352c0-9.288-7.58-16.846-16.898-16.846-9.323 0-16.903 7.559-16.903 16.846 0 .748-.605 1.352-1.353 1.352a1.359 1.359 0 0 1-1.353-1.351Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <path
      d="M48.5 97C75.244 97 97 75.244 97 48.5S75.244 0 48.5 0C21.766 0 0 21.756 0 48.5S21.756 97 48.5 97Z
            m0-92.922c24.497 0 44.422 19.925 44.422 44.422 0 24.498-19.925 44.422-44.432 44.422-24.497 0-44.422-19.924-44.422-44.422C4.078 24.003 24.002 4.078 48.5 4.078Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
  </symbol>
);

const FirewallShape = (
  <symbol
    viewBox="0.2 -0.07 83.9 83.9"
    id="firewall"
    width="83.9"
    height="83.9"
  >
    <rect x="0.2" y="-0.07" width="83.9" height="83.9" stroke="transparent" />
    <path
      d="M84.139 41.88v41.95l-41.97-.01-41.965-.017-.016-41.938L.178-.068h83.96V41.88Z
            M64.26 12.087v7.707h15.425V4.381H64.261v7.706Z
            m-39.754 0v7.707h35.301V4.381H24.508v7.706Z
            m-19.877 0v7.707h15.425V4.381H4.63v7.706Z
            M44.384 31.95v7.706h35.302V24.243H44.384v7.707Z
            m-39.754 0v7.706h35.302V24.243H4.63v7.707Z
            m59.63 19.86v7.707h15.425V44.105H64.261v7.706Z
            m-39.754 0v7.707h35.301V44.105H24.508v7.706Z
            m-19.877 0v7.707h15.425V44.105H4.63v7.706Z
            m39.754 19.862v7.707h35.302V63.967H44.384v7.706Z
            m-39.754 0v7.707h35.302V63.967H4.63v7.706Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
  </symbol>
);

const NetworkShape = (
  <symbol viewBox="0 0 98 98" id="network" width="98" height="98">
    <circle cx="49" cy="49" r="48" stroke="transparent" />
    <path
      d="M47.403.98h3.194c5.537.255 11.055 1.333 16.2 3.42 10.73 4.244 19.796 12.525 25.01 22.824 3.312 6.449 5.066 13.671 5.223 20.914v1.724c-.157 7.154-1.862 14.279-5.096 20.669-3.146 6.291-7.723 11.867-13.25 16.219a47.812 47.812 0 0 1-19.365 9.153c-2.861.647-5.782.94-8.702 1.117h-3.195c-3.832-.206-7.654-.715-11.338-1.774-8.938-2.48-17.101-7.644-23.197-14.631a47.709 47.709 0 0 1-9.575-16.827C1.842 59.3 1.098 54.586.98 49.862v-1.715c.167-8.77 2.754-17.473 7.477-24.872 5.008-7.899 12.378-14.288 20.923-18.1C35.035 2.606 41.2 1.264 47.403.98Z
            M38.23 11.221c-3.038 3.822-5.028 8.35-6.645 12.936 2.264.568 4.587.813 6.89 1.166 2.861.294 5.723.559 8.594.578V5.008c-3.645.764-6.585 3.351-8.84 6.213Z
            m12.69 14.68a80.89 80.89 0 0 0 11.614-1.019 35.109 35.109 0 0 0 3.88-.725c-1.89-5.36-4.321-10.702-8.31-14.837-1.95-2.039-4.38-3.714-7.173-4.312-.01 6.958 0 13.926-.01 20.893Z
            M34.438 7.291a44.138 44.138 0 0 0-17.855 11.711c3.567 1.882 7.389 3.273 11.29 4.273 2.038-6.145 4.9-12.21 9.495-16.856-1 .196-1.96.549-2.93.872Z
            m26.176-.901c.96.882 1.725 1.94 2.568 2.93 3.136 4.194 5.33 9.016 6.967 13.965 3.9-1.02 7.713-2.42 11.29-4.273C75.862 12.975 68.571 8.506 60.613 6.39Z
            m-46.6 15.62c-5.517 7.165-8.79 16.034-9.143 25.079 6.399-.01 12.798 0 19.198 0 .127-6.772.99-13.544 2.695-20.1-4.42-1.176-8.732-2.793-12.75-4.978Z
            m57.212 4.97c1.706 6.565 2.578 13.327 2.695 20.1H93.13c-.372-9.046-3.626-17.915-9.163-25.07-3.998 2.196-8.32 3.793-12.74 4.97Z
            M27.91 47.06c6.39.029 12.78.01 19.17.02V29.742c-5.567-.108-11.124-.676-16.563-1.872-1.656 6.253-2.46 12.72-2.607 19.189Z
            m23.01-17.317v17.336c6.39-.01 12.78.02 19.17-.02-.147-6.467-.951-12.935-2.607-19.198-5.43 1.206-10.996 1.774-16.562 1.882Z
            M4.87 50.921c.363 9.045 3.627 17.914 9.154 25.078 4.008-2.195 8.33-3.802 12.75-4.969-1.706-6.566-2.568-13.328-2.705-20.1-6.4-.01-12.799-.01-19.198-.01Z
            m23.04.02c.147 6.467.941 12.945 2.607 19.207 5.43-1.215 10.996-1.773 16.552-1.881V50.93c-6.38 0-12.769-.03-19.159.01Z
            m23.01-.02v17.336c5.567.098 11.134.686 16.573 1.872A81.024 81.024 0 0 0 70.07 50.91c-6.38.03-12.77.01-19.15.01Z
            m23.001 0c-.107 6.772-.99 13.543-2.695 20.1 4.42 1.166 8.732 2.773 12.75 4.968 5.537-7.154 8.781-16.033 9.163-25.068H73.921Z
            M31.595 73.833c1.872 5.37 4.322 10.712 8.31 14.857 1.95 2.038 4.381 3.714 7.174 4.302.01-6.958 0-13.926 0-20.893-5.204.107-10.398.637-15.484 1.734Z
            M50.921 72.1v20.893c3.645-.774 6.585-3.351 8.83-6.203 3.047-3.832 5.047-8.37 6.654-12.956-2.333-.558-4.714-.833-7.086-1.176-2.793-.274-5.586-.539-8.398-.558Z
            m-34.35 6.889c5.577 6.037 12.858 10.515 20.816 12.622-4.606-4.655-7.477-10.73-9.516-16.885-3.91.98-7.712 2.41-11.3 4.263Z
            m53.568-4.273c-2.049 6.155-4.92 12.24-9.536 16.905 7.948-2.126 15.24-6.585 20.815-12.622-3.557-1.892-7.379-3.273-11.28-4.283Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
  </symbol>
);

const MalwareShape = (
  <symbol viewBox="-1 -1 100 100" id="malware" width="54" height="54">
    <circle
      cx="50"
      cy="50"
      r="49"
      fill="transparent"
      stroke="transparent"
      transform="translate(-1,-1)"
    />
    <path
      d="m57.349.671 17.947 6.93-3.446 9.023-4.49-1.735-3.585 9.4a29.101 29.101 0 0 1 9.348 8.92l9.147-4.093-1.957-4.417 8.782-3.929 7.819 17.658-8.781 3.93-1.956-4.413-9.141 4.093c.586 2.305.899 4.727.899 7.215 0 1.962-.193 3.88-.563 5.736l9.343 3.605 1.72-4.508 8.979 3.465-6.892 18.045-8.973-3.465 1.72-4.51-9.343-3.609a29.128 29.128 0 0 1-8.873 9.399l4.071 9.197 4.393-1.968 3.908 8.83-17.562 7.862-3.908-8.83 4.388-1.966-4.07-9.19a28.878 28.878 0 0 1-7.176.903c-1.957 0-3.864-.194-5.71-.571l-3.586 9.4 4.49 1.73-3.447 9.027-17.946-6.93 3.446-9.022 4.48 1.73 3.594-9.395a29.171 29.171 0 0 1-9.353-8.92L15.92 69.39l1.956 4.417-8.781 3.93-7.82-17.659 8.781-3.929 1.952 4.417 9.146-4.098a29.48 29.48 0 0 1-.894-7.215c0-1.962.192-3.88.562-5.736l-9.348-3.605-1.716 4.509L.78 40.956l6.892-18.04 8.974 3.465-1.726 4.509 9.349 3.61a29.163 29.163 0 0 1 8.872-9.41l-4.071-9.196-4.393 1.967-3.908-8.83 17.563-7.857 3.907 8.829-4.388 1.967 4.07 9.192a28.787 28.787 0 0 1 7.177-.904c1.951 0 3.86.193 5.705.565l3.58-9.4-4.48-1.724L57.35.67Z"
      stroke="transparent"
      data-intersect-ignore="true"
    />
    <path
      d="m57.349.671 17.947 6.93-3.446 9.023-4.49-1.735-3.585 9.4a29.101 29.101 0 0 1 9.348 8.92l9.147-4.093-1.957-4.417 8.782-3.929 7.819 17.658-8.781 3.93-1.956-4.413-9.141 4.093c.586 2.305.899 4.727.899 7.215 0 1.962-.193 3.88-.563 5.736l9.343 3.605 1.72-4.508 8.979 3.465-6.892 18.045-8.973-3.465 1.72-4.51-9.343-3.609a29.128 29.128 0 0 1-8.873 9.399l4.071 9.197 4.393-1.968 3.908 8.83-17.562 7.862-3.908-8.83 4.388-1.966-4.07-9.19a28.878 28.878 0 0 1-7.176.903c-1.957 0-3.864-.194-5.71-.571l-3.586 9.4 4.49 1.73-3.447 9.027-17.946-6.93 3.446-9.022 4.48 1.73 3.594-9.395a29.171 29.171 0 0 1-9.353-8.92L15.92 69.39l1.956 4.417-8.781 3.93-7.82-17.659 8.781-3.929 1.952 4.417 9.146-4.098a29.48 29.48 0 0 1-.894-7.215c0-1.962.192-3.88.562-5.736l-9.348-3.605-1.716 4.509L.78 40.956l6.892-18.04 8.974 3.465-1.726 4.509 9.349 3.61a29.163 29.163 0 0 1 8.872-9.41l-4.071-9.196-4.393 1.967-3.908-8.83 17.563-7.857 3.907 8.829-4.388 1.967 4.07 9.192a28.787 28.787 0 0 1 7.177-.904c1.951 0 3.86.193 5.705.565l3.58-9.4-4.48-1.724L57.35.67Z
            m-8.252 29.252c-10.622 0-19.226 8.65-19.226 19.33 0 10.68 8.604 19.33 19.226 19.33 10.621 0 19.225-8.65 19.225-19.33 0-10.68-8.604-19.33-19.225-19.33Z
            m-2.403 23.515c2.297 1.334 3.085 4.291 1.759 6.602a4.794 4.794 0 0 1-6.566 1.768c-2.297-1.334-3.086-4.291-1.759-6.601a4.793 4.793 0 0 1 6.566-1.769Z
            m12.015-9.017c2.653 0 4.806 2.165 4.806 4.832 0 2.668-2.153 4.833-4.806 4.833s-4.806-2.165-4.806-4.833c0-2.667 2.153-4.832 4.806-4.832Z
            m-10.256-5.954c1.326 2.31.538 5.267-1.76 6.601a4.793 4.793 0 0 1-6.565-1.769c-1.327-2.31-.538-5.267 1.76-6.6a4.794 4.794 0 0 1 6.565 1.768Z"
      fill="#000000"
      stroke="transparent"
      data-intersect-ignore="true"
    />
  </symbol>
);

const InternetShape = (
  <symbol viewBox="0 0 100 69" id="internet" width="100" height="69">
    <path
      d="M85 21 100 44 100 57 91 69 15 69 0 57.8751 0 38 29 0 49 0Z"
      fill="transparent"
      stroke="transparent"
    />
    <path
      d="M88.368 48.57c-.131-9.323-7.757-16.867-17.11-16.867-2.11 0-4.204.394-6.162 1.15a25.322 25.322 0 0 0-8.103-11.722 25.233 25.233 0 0 0-15.816-5.588c-13.517 0-24.58 10.709-25.151 24.087a22.485 22.485 0 0 0-11.027 7.36A22.418 22.418 0 0 0 0 61.086c0 12.336 10.035 22.371 22.371 22.371h58.348c10.08 0 18.28-8.2 18.281-18.281 0-7.139-4.22-13.645-10.632-16.606Z"
      stroke="transparent"
      transform="matrix(1 0 0 1.00168 0 -15.125)"
      data-intersect-ignore="true"
    />
    <path
      d="M88.368 48.57c-.131-9.323-7.757-16.867-17.11-16.867-2.11 0-4.204.394-6.162 1.15a25.322 25.322 0 0 0-8.103-11.722 25.233 25.233 0 0 0-15.816-5.588c-13.517 0-24.58 10.709-25.151 24.087a22.485 22.485 0 0 0-11.027 7.36A22.418 22.418 0 0 0 0 61.086c0 12.336 10.035 22.371 22.371 22.371h58.348c10.08 0 18.28-8.2 18.281-18.281 0-7.139-4.22-13.645-10.632-16.606Z
            m-7.65 31.046H22.372c-10.217 0-18.53-8.313-18.53-18.53a18.56 18.56 0 0 1 4.14-11.673 18.6 18.6 0 0 1 10.363-6.417 1.92 1.92 0 0 0 1.505-1.907l-.002-.063c-.001-.103-.003-.205-.003-.308 0-11.764 9.57-21.334 21.333-21.334 4.936 0 9.57 1.637 13.4 4.734 3.723 3.01 6.353 7.221 7.405 11.86a1.922 1.922 0 0 0 2.81 1.25 13.265 13.265 0 0 1 6.466-1.684c7.317 0 13.27 5.954 13.27 13.272 0 .265-.01.549-.033.891a1.92 1.92 0 0 0 1.248 1.928c5.632 2.091 9.416 7.532 9.416 13.541 0 7.962-6.478 14.44-14.44 14.44Z"
      fill="#000000"
      stroke="transparent"
      transform="matrix(1 0 0 1.00168 0 -15.125)"
      data-intersect-ignore="true"
    />
  </symbol>
);

const EmailShape = (
  <symbol viewBox="0 0 57.6 41.4 " id="email" width="57.6" height="41.4">
    <rect
      x="0"
      y="0"
      width="57.6"
      height="41.4"
      fill="transparent"
      stroke="transparent"
    />
    <path
      d="M9.068 22.669h90.675V86.14H9.068Z"
      stroke="#000000"
      strokeWidth="4"
      transform="scale(0.6 0.6) matrix(1 0 0 1.0022 -6.37628 -20.0259)"
      data-intersect-ignore="true"
    />
    <path
      d="m9.068 22.669 45.337 40.804 45.338-40.804"
      fill="transparent"
      stroke="#000000"
      strokeWidth="4"
      transform="scale(0.6 0.6) matrix(1 0 0 1.0022 -6.37628 -20.0259)"
      data-intersect-ignore="true"
    />
  </symbol>
);

const ThreatActorShape = (
  <symbol viewBox="0 0 100 114" id="threatActor" width="100" height="114">
    <path
      d="M74 20 100 83 100 114 0 114 0 83 26 20 40 0 60 0Z"
      fill="transparent"
      stroke="transparent"
    />
    <path
      d="M102.611 45.54c-3.028 0-6.2 1.493-9.356 3.86-3.154 2.367-6.302 5.631-9.114 9.329-5.62 7.395-9.997 16.536-9.997 24.125 0 5.767 1.118 8.945 4.136 12.343-3.068 1.715-6.914 3.584-9.757 5.589-2.661 1.963-4.558 4.556-7.186 9.77-4.922 9.44-6.974 16.691-6.625 22.437.35 5.745 3.292 9.888 7.789 12.545 2.09 1.234 4.507 2.19 7.187 2.936H54.43c-.673.062-1.228.733-1.165 1.407.062.674.733 1.229 1.406 1.166h15.417v6.434c0 .674.612 1.286 1.285 1.286h61.668c.672 0 1.285-.613 1.285-1.286v-6.434h15.417c.679.013 1.303-.607 1.303-1.286 0-.68-.624-1.296-1.303-1.286H138.3c2.415-.759 4.479-1.736 6.183-3.017 3.642-2.738 5.411-6.949 5.26-12.584-.151-5.636-2.071-12.803-5.661-22.195-1.986-5.255-3.867-7.919-6.625-9.891-3.627-2.242-7.292-3.998-10.037-5.588 1.289-1.478 2.333-2.905 2.891-4.544.734-2.154.883-4.538.883-7.8 0-7.588-4.354-16.729-9.997-24.125-2.821-3.697-5.976-6.962-9.154-9.329-3.177-2.366-6.374-3.86-9.435-3.86Z"
      stroke="transparent"
      transform="matrix(1.00567 0 0 1 -53.2159 -45.2073)"
      data-intersect-ignore="true"
    />
    <path
      d="M102.611 45.54c-3.028 0-6.2 1.493-9.356 3.86-3.154 2.367-6.302 5.631-9.114 9.329-5.62 7.395-9.997 16.536-9.997 24.125 0 5.767 1.118 8.945 4.136 12.343-3.068 1.715-6.914 3.584-9.757 5.589-2.661 1.963-4.558 4.556-7.186 9.77-4.922 9.44-6.974 16.691-6.625 22.437.35 5.745 3.292 9.888 7.789 12.545 2.09 1.234 4.507 2.19 7.187 2.936H54.43c-.673.062-1.228.733-1.165 1.407.062.674.733 1.229 1.406 1.166h15.417v6.434c0 .674.612 1.286 1.285 1.286h61.668c.672 0 1.285-.613 1.285-1.286v-6.434h15.417c.679.013 1.303-.607 1.303-1.286 0-.68-.624-1.296-1.303-1.286H138.3c2.415-.759 4.479-1.736 6.183-3.017 3.642-2.738 5.411-6.949 5.26-12.584-.151-5.636-2.071-12.803-5.661-22.195-1.986-5.255-3.867-7.919-6.625-9.891-3.627-2.242-7.292-3.998-10.037-5.588 1.289-1.478 2.333-2.905 2.891-4.544.734-2.154.883-4.538.883-7.8 0-7.588-4.354-16.729-9.997-24.125-2.821-3.697-5.976-6.962-9.154-9.329-3.177-2.366-6.374-3.86-9.435-3.86Z
            m0 2.574c2.166 0 4.986 1.2 7.909 3.377 2.924 2.176 5.932 5.266 8.633 8.805 3.944 5.17 7.173 11.31 8.632 16.806-8.172-2.745-17.029-4.543-25.575-4.543-9.346 0-16.347 1.44-24.531 4.181 1.508-5.402 4.668-11.388 8.511-16.445 2.692-3.54 5.69-6.629 8.592-8.805 2.902-2.177 5.71-3.377 7.829-3.377Z
            m-.402 27.02c8.672 0 17.817 1.99 26.178 4.945.141.959.241 1.892.241 2.775 0 3.17-.183 5.25-.763 6.955-.506 1.486-1.37 2.772-2.81 4.303-6.178 5.986-13.968 10.614-22.846 10.614-9.064 0-17.176-6.185-22.202-11.217-2.736-2.97-3.291-5.113-3.291-10.656 0-.982.107-2.022.28-3.095 8.708-3.036 15.574-4.624 25.215-4.624Z
            m0 2.493c-8.43 0-16.862 1.206-19.271 3.619.005 4.937 0 8.041 4.818 14.474 3.211 3.217 8.03 6.434 14.453 6.434 6.424 0 11.242-3.217 14.454-6.434 4.818-6.433 4.818-9.65 4.818-14.474-2.409-2.413-10.84-3.62-19.272-3.62Z
            m-22 19.622c5.304 4.833 13.02 10.052 22 10.052 9.086 0 16.998-4.375 23.287-10.052 4.975 2.71 8.223 4.044 10.439 5.629 2.34 1.673 3.836 3.687 5.741 8.725 3.543 9.265 5.364 16.25 5.501 21.35.136 5.101-1.266 8.207-4.256 10.454-2.013 1.513-4.89 2.585-8.592 3.338v-34.298c0-.674-.612-1.286-1.285-1.286h-61.91c-.588.111-1.054.686-1.044 1.286v33.412c-2.4-.667-4.538-1.49-6.303-2.533-3.945-2.331-6.2-5.505-6.504-10.494-.303-4.99 1.539-11.893 6.343-21.109 2.56-5.078 4.145-7.204 6.424-8.886 2.162-1.595 5.193-2.88 10.158-5.589Z
            m-7.549 16.486h59.101v34.74h-59.1Z
            m23.126 10.293v2.574h12.847v-2.574Z
            m-23.126 27.02h59.101v5.146h-59.1Z"
      fill="#000000"
      stroke="transparent"
      transform="matrix(1.00567 0 0 1 -53.2159 -45.2073)"
      data-intersect-ignore="true"
    />
  </symbol>
);

const SpecialChildShape = (
  <symbol viewBox="0 0 154 154" id="specialChild">
    <rect
      x="2.5"
      y="0"
      width="154"
      height="154"
      fill="rgba(30, 144, 255, 0.12)"
    />
  </symbol>
);

const EmptyEdgeShape = (
  <symbol viewBox="0 0 50 50" id="emptyEdge">
    <circle cx="25" cy="25" r="8" fill="currentColor" />
  </symbol>
);

const SpecialEdgeShape = (
  <symbol viewBox="0 0 50 50" id="specialEdge">
    <rect
      transform="rotate(45)"
      x="27.5"
      y="-7.5"
      width="15"
      height="15"
      fill="currentColor"
    />
  </symbol>
);

export default {
  EdgeTypes: {
    emptyEdge: {
      shape: EmptyEdgeShape,
      shapeId: '#emptyEdge',
    },
    specialEdge: {
      shape: SpecialEdgeShape,
      shapeId: '#specialEdge',
    },
  },
  NodeSubtypes: {
    specialChild: {
      shape: SpecialChildShape,
      shapeId: '#specialChild',
    },
  },
  NodeTypes: {
    emptyNode: {
      shape: EmptyNodeShape,
      shapeId: '#emptyNode',
      typeText: 'None',
    },
    other: {
      shape: OtherShape,
      shapeId: '#other',
      typeText: 'None',
    },
    special: {
      shape: SpecialShape,
      shapeId: '#special',
      typeText: 'Special',
    },
    skinny: {
      shape: SkinnyShape,
      shapeId: '#skinny',
      typeText: 'Skinny',
    },
    computer: {
      shape: ComputerShape,
      shapeId: '#computer',
      // typeText: 'Computer',
    },
    file: {
      shape: FileShape,
      shapeId: '#file',
      // typeText: 'File',
    },
    user: {
      shape: UserShape,
      shapeId: '#user',
      // typeText: 'User',
    },
    database: {
      shape: DatabaseShape,
      shapeId: '#database',
      // typeText: 'Database',
    },
    hash: {
      shape: HashShape,
      shapeId: '#hash',
      // typeText: 'Hash',
    },
    action: {
      shape: ActionShape,
      shapeId: '#action',
      // typeText: 'Action',
    },
    process: {
      shape: ProcessShape,
      shapeId: '#process',
      // typeText: 'Process',
    },
    server: {
      shape: ServerShape,
      shapeId: '#server',
      // typeText: 'Server',
    },
    folder: {
      shape: FolderShape,
      shapeId: '#folder',
      // typeText: 'Folder',
    },
    userGroup: {
      shape: UserGroupShape,
      shapeId: '#userGroup',
      // typeText: 'UserGroup',
    },
    firewall: {
      shape: FirewallShape,
      shapeId: '#firewall',
      // typeText: 'Firewall',
    },
    network: {
      shape: NetworkShape,
      shapeId: '#network',
      // typeText: 'Network',
    },
    malware: {
      shape: MalwareShape,
      shapeId: '#malware',
      // typeText: 'Malware',
    },
    internet: {
      shape: InternetShape,
      shapeId: '#internet',
      // typeText: 'Internet',
    },
    email: {
      shape: EmailShape,
      shapeId: '#email',
      // typeText: 'Email',
    },
    threatActor: {
      shape: ThreatActorShape,
      shapeId: '#threatActor',
      // typeText: 'ThreatActor',
    },
    poly: {
      shape: PolyShape,
      shapeId: '#poly',
      typeText: 'Poly',
    },
    complexCircle: {
      shape: ComplexCircleShape,
      shapeId: '#complexCircle',
      typeText: 'complexCircle',
    },
  },
};
