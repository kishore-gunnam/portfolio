export default function ProjectCard({
  title,
  description,
  href,
  icon,
  tags = null,
}) {
  // const tags = ["GitHub", "React", "JamStack"];
  return (
    <a
      className="mb-4 hover:shadow"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
        {/* */}
        {icon === 'graduation' && (
          <div className="h-8 w-8 ml-2 mr-4">
            <svg className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100" fill="orange" viewBox="0 0 544.316 544.316" >
              <g>
                <g>
                  <path d="M272.164,340.276L89.452,274.884l0.625,119.831c0,0,85.447,43.077,182.087,43.077
			c100.907,0,182.718-50.808,182.718-50.808l-0.76-112.006L272.164,340.276z"/>
                  <polygon points="510.149,229.122 544.316,216.616 272.164,106.524 0,216.616 272.164,316.279 489.527,236.677 489.527,352.607 
			475.795,352.607 475.795,408.354 521.312,408.354 521.312,352.607 510.149,352.607 		"/>
                </g>
              </g>

            </svg>
          </div>
        )}
        {icon === "algochurn" && (
          <div className="flex-shrink-0 mr-4">

            <svg className="h-8 w-14 min-w-sm text-gray-900 dark:text-gray-100" width="204" height="99" viewBox="0 0 204 99" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="204" height="99" rx="21" fill="#030023" />
              <path d="M15.2109 55.7564L44.2109 68.5263V60.1847L24.6236 52.3168V51.946L44.2109 44.0781V35.7365L15.2109 48.5064V55.7564ZM156.313 24.8409H148.754L135.16 75.3438H142.719L156.313 24.8409ZM191.25 55.7564V48.5064L162.25 35.7365V44.0781L181.837 51.946V52.3168L162.25 60.1847V68.5263L191.25 55.7564Z" fill="#007EF3" />
              <path d="M60.3587 69L63.4893 59.3814H78.7102L81.8409 69H91.3977L76.8565 26.8182H65.3636L50.8018 69H60.3587ZM65.755 52.4197L70.9453 36.4574H71.2749L76.4652 52.4197H65.755ZM131.71 41.5859C130.536 31.8438 123.163 26.2415 113.4 26.2415C102.257 26.2415 93.7509 34.1094 93.7509 47.9091C93.7509 61.6676 102.113 69.5767 113.4 69.5767C124.213 69.5767 130.742 62.3885 131.71 54.6236L122.689 54.5824C121.845 59.093 118.302 61.6882 113.544 61.6882C107.139 61.6882 102.793 56.9304 102.793 47.9091C102.793 39.1349 107.077 34.13 113.606 34.13C118.487 34.13 122.009 36.9517 122.689 41.5859H131.71Z" fill="white" />
            </svg>

          </div>
        )}
        {icon === "melmaa" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="h-8 w-8 min-w-lg text-pink-500 dark:text-gray-100 "
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
              />
            </svg>
          </div>
        )}
        {icon === "tailwindmasterkit" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <svg
              width="260"
              height="260"
              viewBox="0 0 260 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100 "
            >
              <rect width="260" height="260" rx="11" fill="#FBBF24"></rect>
              <path
                d="M76.3492 60.7143C76.3492 57.9529 78.5878 55.7143 81.3492 55.7143H260V107.302H81.3492C78.5878 107.302 76.3492 105.063 76.3492 102.302V60.7143Z"
                fill="white"
              ></path>
              <rect
                x="156.825"
                y="260"
                width="156.825"
                height="51.5873"
                transform="rotate(-90 156.825 260)"
                fill="white"
              ></rect>
            </svg>
          </div>
        )}
        {icon === "covidrescue" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
        )}
        {icon === "gba" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <svg
              className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>
        )}
        {icon === "devmedium" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <svg
              className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </div>
        )}
        {icon === "github" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <svg
              className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
        {icon === "ipl" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <svg
              className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
        )}
        {icon === "music" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Music Streaming Application</span>

            <svg
              className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              ></path>
            </svg>
          </div>
        )}
        {icon == "placeholdertech" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">PlaceholderTech</span>

            <svg
              className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
              width="366"
              height="385"
              viewBox="0 0 366 385"
              fill="none"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M111.888 240.769L113.444 144.658L197.882 193.686L111.888 240.769Z"
                stroke="black"
                stroke-width="16"
              />
              <path
                d="M187.166 188.391L65.2489 109.876C63.9179 109.019 62.166 109.975 62.166 111.558V193.891L61.166 275.391"
                stroke="black"
                stroke-width="16"
              />
              <path
                d="M106.166 298.891C90.6661 307.039 61.166 297.391 61.166 274.891"
                stroke="black"
                stroke-width="16"
              />
              <path
                d="M69.666 54.3909C79.0318 30.3506 114.666 20.8909 134.666 33.8909"
                stroke="black"
                stroke-width="16"
              />
              <path
                d="M251.666 167.391C269.666 178.891 271.166 210.891 246.666 223.891"
                stroke="black"
                stroke-width="16"
              />
              <path
                d="M11.1666 100.391C11.1664 56.3907 63.6665 47.3908 85.6658 61.3907"
                stroke="black"
                stroke-width="16"
              />
              <path
                d="M118.666 348.391C62.729 378.337 10.1861 322.74 10.6663 287.891"
                stroke="black"
                stroke-width="16"
              />
              <path
                d="M287.666 131.391C345.666 168.391 321.166 240.391 291.166 256.391"
                stroke="black"
                stroke-width="16"
              />
              <path
                d="M105.166 299.391L246.666 223.891"
                stroke="black"
                stroke-width="16"
              />
              <path
                d="M251.666 167.391L85.666 61.3909"
                stroke="black"
                stroke-width="16"
              />
              <path
                d="M11.166 100.391L10.666 288.391"
                stroke="black"
                stroke-width="16"
              />
              <path
                d="M118.667 348.391L291.167 256.391"
                stroke="black"
                stroke-width="16"
              />
              <path
                d="M287.666 131.391L134.518 33.7655"
                stroke="black"
                stroke-width="16"
              />
            </svg>
          </div>
        )}
        {icon == "play" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Play Placeholdertech</span>

            <svg
              className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="100px"
              height="100px"
            >
              <path d="M 34.699219 15 C 34.397925 14.997183 34.10151 15.009343 33.810547 15.035156 C 32.646693 15.138408 31.56829 15.47182 30.59375 16.041016 C 28.112884 17.489532 26.700744 20.322342 26.236328 23.998047 C 25.786472 27.558518 26.241428 31.976244 27.451172 36.875 C 22.600207 38.25612 18.545561 40.056815 15.689453 42.224609 C 12.740494 44.462879 11 47.111293 11 50 C 11 52.888707 12.740503 55.537 15.689453 57.775391 C 18.54556 59.943309 22.600201 61.745362 27.451172 63.126953 C 26.241415 68.025214 25.786477 72.441396 26.236328 76.001953 C 26.700743 79.677778 28.112861 82.510455 30.59375 83.958984 C 31.784162 84.653748 33.134816 85.004963 34.601562 85.003906 C 35.534394 85.003906 36.514884 84.863543 37.537109 84.589844 C 41.391572 83.557074 45.683344 80.593704 50 76.359375 C 54.316656 80.593704 58.608428 83.557074 62.462891 84.589844 C 63.485116 84.863543 64.465606 85.003906 65.398438 85.003906 C 66.863844 85.003906 68.215708 84.654506 69.40625 83.958984 C 71.887153 82.510447 73.297434 79.677765 73.761719 76.001953 C 74.211444 72.441408 73.758119 68.025191 72.548828 63.126953 C 77.399799 61.745362 81.45444 59.943309 84.310547 57.775391 C 87.259497 55.537 89 52.888707 89 50 C 89 47.111293 87.259506 44.462879 84.310547 42.224609 C 81.454439 40.056815 77.399793 38.25612 72.548828 36.875 C 73.758585 31.976739 74.213523 27.560557 73.763672 24 C 73.299257 20.324175 71.887139 17.489545 69.40625 16.041016 C 67.457051 14.902555 65.089953 14.707256 62.462891 15.410156 C 58.608221 16.441972 54.316646 19.408194 50 23.642578 C 45.683344 19.40825 41.391572 16.442926 37.537109 15.410156 C 36.551888 15.146161 35.6031 15.00845 34.699219 15 z M 34.695312 15.996094 C 35.502061 16.005638 36.362065 16.131702 37.277344 16.376953 C 40.952555 17.361694 45.283507 20.294414 49.646484 24.646484 A 0.50005 0.50005 0 0 0 50.353516 24.646484 C 54.71652 20.294387 59.047642 17.360679 62.722656 16.376953 C 65.163594 15.723853 67.211543 15.916758 68.902344 16.904297 C 71.035455 18.149767 72.330399 20.633825 72.771484 24.125 C 73.21257 27.616175 72.778184 32.072538 71.498047 37.078125 A 0.50005 0.50005 0 0 0 71.849609 37.683594 C 76.828968 39.056338 80.906038 40.897004 83.705078 43.021484 C 86.504122 45.145965 88 47.512707 88 50 C 88 52.487293 86.504128 54.853907 83.705078 56.978516 C 80.906029 59.103125 76.828981 60.943163 71.849609 62.316406 A 0.50005 0.50005 0 0 0 71.498047 62.921875 C 72.77771 67.927486 73.21245 72.385765 72.771484 75.876953 C 72.330519 79.368141 71.035441 81.850241 68.902344 83.095703 C 67.869268 83.69957 66.708388 84.003906 65.398438 84.003906 C 64.565268 84.003906 63.672431 83.877348 62.722656 83.623047 L 62.722656 83.625 C 59.047445 82.640259 54.716493 79.705586 50.353516 75.353516 A 0.50005 0.50005 0 0 0 49.646484 75.353516 C 45.283507 79.705586 40.952555 82.640259 37.277344 83.625 L 37.277344 83.623047 C 36.327569 83.877348 35.434732 84.003906 34.601562 84.003906 C 33.29231 84.00485 32.131244 83.698939 31.097656 83.095703 C 28.964545 81.850233 27.669601 79.368128 27.228516 75.876953 C 26.78743 72.385778 27.221816 67.929415 28.501953 62.923828 A 0.50005 0.50005 0 0 0 28.150391 62.316406 C 23.171019 60.943163 19.093971 59.103125 16.294922 56.978516 C 13.495872 54.853907 12 52.487293 12 50 C 12 47.512707 13.495881 45.145965 16.294922 43.021484 C 19.093962 40.897004 23.171032 39.056338 28.150391 37.683594 A 0.50005 0.50005 0 0 0 28.501953 37.078125 C 27.221796 32.072028 26.787431 27.616045 27.228516 24.125 C 27.6696 20.633955 28.964522 18.149781 31.097656 16.904297 C 31.943116 16.410493 32.877604 16.115638 33.90625 16.025391 C 34.163412 16.002828 34.426396 15.992912 34.695312 15.996094 z M 34.615234 18 C 33.681451 18 32.831848 18.206573 32.105469 18.630859 C 30.342624 19.659946 29.390368 21.945785 29.126953 25.03125 C 28.863538 28.116715 29.291589 32.062974 30.453125 36.597656 A 0.50005 0.50005 0 0 0 31.046875 36.960938 C 34.195212 36.252263 37.637969 35.718859 41.296875 35.388672 A 0.50005 0.50005 0 0 0 41.662109 35.175781 C 43.809603 32.080367 46.042805 29.262465 48.289062 26.798828 A 0.50005 0.50005 0 0 0 48.273438 26.107422 C 44.220359 22.045269 40.241699 19.241572 36.759766 18.308594 C 36.001843 18.106551 35.286093 18 34.615234 18 z M 65.384766 18 C 64.712992 18 63.998796 18.10666 63.240234 18.308594 C 59.758211 19.241596 55.779608 22.047252 51.726562 26.109375 A 0.50005 0.50005 0 0 0 51.710938 26.798828 C 53.95724 29.262515 56.190448 32.079446 58.337891 35.175781 A 0.50005 0.50005 0 0 0 58.703125 35.388672 C 62.362023 35.718858 65.803735 36.252249 68.953125 36.960938 A 0.50005 0.50005 0 0 0 69.546875 36.597656 C 70.708407 32.062974 71.136461 28.116835 70.873047 25.03125 C 70.609632 21.945665 69.657278 19.660458 67.894531 18.630859 C 67.1685 18.206114 66.317634 18 65.384766 18 z M 34.615234 19 C 35.180376 19 35.811876 19.08948 36.501953 19.273438 C 39.586557 20.099951 43.367099 22.725261 47.230469 26.529297 C 45.109232 28.889063 43.007332 31.524788 40.982422 34.427734 C 37.55378 34.746212 34.333573 35.254253 31.337891 35.90625 C 30.28788 31.651288 29.882637 27.931225 30.123047 25.115234 C 30.372382 22.194699 31.28022 20.270054 32.609375 19.494141 C 33.166996 19.168427 33.827018 19 34.615234 19 z M 65.384766 19 C 66.171897 19 66.832703 19.168886 67.388672 19.494141 A 0.50005 0.50005 0 0 0 67.390625 19.494141 C 68.719879 20.270542 69.627618 22.196521 69.876953 25.117188 C 70.117398 27.933715 69.712474 31.65245 68.662109 35.908203 C 65.665711 35.256215 62.446196 34.746213 59.017578 34.427734 C 56.992621 31.523863 54.890733 28.888941 52.769531 26.529297 C 56.632931 22.72518 60.413531 20.099927 63.498047 19.273438 C 64.189439 19.089372 64.818539 19 65.384766 19 z M 49.966797 28.144531 A 0.50005 0.50005 0 0 0 49.628906 28.308594 C 47.980774 30.131009 46.336772 32.147474 44.732422 34.326172 A 0.50005 0.50005 0 0 0 45.160156 35.121094 C 46.745197 35.04443 48.35708 35 50 35 C 51.64292 35 53.255015 35.0454 54.839844 35.123047 A 0.50005 0.50005 0 0 0 55.267578 34.326172 C 53.663192 32.146419 52.019226 30.131009 50.371094 28.308594 A 0.50005 0.50005 0 0 0 49.966797 28.144531 z M 50 29.435547 C 51.273508 30.867394 52.539682 32.441996 53.791016 34.095703 C 52.540641 34.046946 51.288119 34 50 34 C 48.711881 34 47.459233 34.047423 46.208984 34.095703 C 47.460584 32.442171 48.726236 30.867681 50 29.435547 z M 50 37 C 47.541326 37 45.173516 37.09376 42.902344 37.263672 A 0.50005 0.50005 0 0 0 42.525391 37.482422 C 41.245225 39.385589 39.999147 41.376434 38.8125 43.455078 C 37.587309 45.602932 36.487181 47.716178 35.501953 49.785156 A 0.50005 0.50005 0 0 0 35.501953 50.216797 C 36.487181 52.285775 37.587272 54.399962 38.8125 56.546875 C 39.998235 58.624677 41.24441 60.61461 42.523438 62.517578 A 0.50005 0.50005 0 0 0 42.902344 62.736328 C 45.173527 62.90624 47.541326 63 50 63 C 52.458674 63 54.827443 62.90624 57.099609 62.736328 A 0.50005 0.50005 0 0 0 57.476562 62.517578 C 58.75559 60.61461 60.003718 58.624677 61.189453 56.546875 C 62.414681 54.399962 63.514772 52.285775 64.5 50.216797 A 0.50005 0.50005 0 0 0 64.5 49.785156 C 63.514748 47.715122 62.414681 45.601991 61.189453 43.455078 A 0.50005 0.50005 0 0 0 61.189453 43.453125 C 60.002809 41.375492 58.755635 39.385457 57.476562 37.482422 A 0.50005 0.50005 0 0 0 57.097656 37.263672 C 54.825501 37.09381 52.458674 37 50 37 z M 39.132812 37.628906 A 0.50005 0.50005 0 0 0 39.054688 37.632812 C 36.415537 37.947741 33.942361 38.373984 31.650391 38.884766 A 0.50005 0.50005 0 0 0 31.28125 39.519531 C 31.981423 41.789301 32.847198 44.174417 33.894531 46.650391 A 0.50005 0.50005 0 0 0 34.800781 46.683594 C 35.51367 45.283703 36.266797 43.874884 37.074219 42.462891 A 0.50005 0.50005 0 0 0 37.076172 42.462891 C 37.872351 41.068334 38.695394 39.717392 39.535156 38.396484 A 0.50005 0.50005 0 0 0 39.132812 37.628906 z M 60.894531 37.628906 A 0.50005 0.50005 0 0 0 60.845703 37.630859 A 0.50005 0.50005 0 0 0 60.464844 38.398438 C 61.303862 39.719741 62.129786 41.067663 62.925781 42.462891 A 0.50005 0.50005 0 0 0 62.925781 42.464844 C 63.732238 43.875894 64.485286 45.282613 65.199219 46.683594 A 0.50005 0.50005 0 0 0 66.105469 46.652344 C 67.152806 44.175356 68.017641 41.791023 68.71875 39.521484 A 0.50005 0.50005 0 0 0 68.351562 38.884766 C 66.058661 38.374001 63.584477 37.947741 60.945312 37.632812 A 0.50005 0.50005 0 0 0 60.894531 37.628906 z M 50 38 C 52.348057 38 54.601869 38.09293 56.777344 38.25 C 57.997119 40.073955 59.188541 41.96766 60.320312 43.949219 C 61.491137 46.000801 62.533795 48.019879 63.482422 50 C 62.533592 51.979737 61.491423 53.998697 60.320312 56.050781 C 59.189594 58.032177 57.997156 59.926054 56.777344 61.75 C 54.602368 61.906986 52.347405 62 50 62 C 47.651943 62 45.397274 61.907068 43.222656 61.75 C 42.002844 59.926054 40.810405 58.032177 39.679688 56.050781 C 38.508578 53.998697 37.466408 51.979737 36.517578 50 C 37.466228 48.020724 38.508828 46.001823 39.679688 43.949219 C 40.811462 41.966696 42.004083 40.073775 43.224609 38.25 C 45.398596 38.093018 47.652619 38 50 38 z M 38.121094 38.802734 C 37.474149 39.840682 36.828018 40.879101 36.207031 41.966797 C 35.579414 43.064354 35.009525 44.153439 34.441406 45.242188 C 33.676203 43.359125 32.990396 41.518495 32.433594 39.763672 C 34.21321 39.3821 36.129465 39.068941 38.121094 38.802734 z M 61.878906 38.804688 C 63.870262 39.070836 65.784295 39.384107 67.564453 39.765625 C 67.007141 41.520009 66.321456 43.359324 65.556641 45.242188 C 64.988539 44.15392 64.421262 43.064652 63.794922 41.96875 C 63.173971 40.880341 62.525368 39.841943 61.878906 38.804688 z M 28.822266 39.599609 A 0.50005 0.50005 0 0 0 28.703125 39.617188 C 24.196736 40.85849 20.566912 42.446946 18.03125 44.212891 C 15.495588 45.978835 14 47.951676 14 50 C 14 52.048324 15.495588 54.021165 18.03125 55.787109 C 20.566912 57.553054 24.196736 59.141463 28.703125 60.382812 A 0.50005 0.50005 0 0 0 29.3125 60.046875 C 30.274388 56.911061 31.539195 53.605455 33.095703 50.208984 A 0.50005 0.50005 0 0 0 33.095703 49.791016 C 31.539195 46.394545 30.274388 43.088939 29.3125 39.953125 A 0.50005 0.50005 0 0 0 28.822266 39.599609 z M 71.148438 39.599609 A 0.50005 0.50005 0 0 0 70.6875 39.953125 C 69.725598 43.087991 68.46079 46.394579 66.904297 49.791016 A 0.50005 0.50005 0 0 0 66.904297 50.208984 C 68.460805 53.605455 69.725612 56.911061 70.6875 60.046875 A 0.50005 0.50005 0 0 0 71.296875 60.382812 C 75.803264 59.141462 79.433088 57.553054 81.96875 55.787109 C 84.504412 54.021165 86 52.048324 86 50 C 86 47.951676 84.504412 45.978835 81.96875 44.212891 C 79.433088 42.446946 75.803264 40.858537 71.296875 39.617188 A 0.50005 0.50005 0 0 0 71.148438 39.599609 z M 28.542969 40.728516 C 29.478699 43.704549 30.652636 46.808157 32.105469 50 C 30.652636 53.191843 29.478699 56.295451 28.542969 59.271484 C 24.335809 58.072101 20.915885 56.577231 18.603516 54.966797 C 16.205178 53.296445 15 51.547676 15 50 C 15 48.452324 16.205178 46.703509 18.603516 45.033203 C 20.915885 43.422769 24.335809 41.927899 28.542969 40.728516 z M 71.457031 40.728516 C 75.664191 41.927899 79.084115 43.422769 81.396484 45.033203 C 83.794822 46.703463 85 48.452324 85 50 C 85 51.547676 83.794822 53.296491 81.396484 54.966797 C 79.084115 56.577231 75.664191 58.072101 71.457031 59.271484 C 70.521301 56.295451 69.347364 53.191843 67.894531 50 C 69.347377 46.80809 70.521314 43.703746 71.457031 40.728516 z M 50 42 C 45.593564 42 42 45.593568 42 50 C 42 54.406432 45.593564 58 50 58 C 54.406436 58 58 54.406432 58 50 C 58 45.593568 54.406436 42 50 42 z M 50 44 C 53.325556 44 56 46.674446 56 50 C 56 53.325554 53.325556 56 50 56 C 46.674444 56 44 53.325554 44 50 C 44 46.674446 46.674444 44 50 44 z M 34.355469 53.044922 A 0.50005 0.50005 0 0 0 33.894531 53.349609 C 32.847131 55.824735 31.982338 58.210053 31.28125 60.478516 A 0.50005 0.50005 0 0 0 31.648438 61.115234 C 33.940407 61.626016 36.414592 62.05226 39.052734 62.367188 A 0.50005 0.50005 0 0 0 39.533203 61.601562 C 38.694346 60.281509 37.869434 58.932651 37.072266 57.537109 C 36.266632 56.125759 35.513585 54.718082 34.800781 53.318359 A 0.50005 0.50005 0 0 0 34.355469 53.044922 z M 65.628906 53.044922 A 0.50005 0.50005 0 0 0 65.199219 53.318359 C 64.48633 54.71825 63.732238 56.126059 62.925781 57.537109 C 62.129741 58.931421 61.303862 60.280259 60.464844 61.601562 A 0.50005 0.50005 0 0 0 60.945312 62.367188 C 63.584477 62.052259 66.057669 61.62601 68.349609 61.115234 A 0.50005 0.50005 0 0 0 68.71875 60.478516 C 68.01765 58.210013 67.152828 55.825644 66.105469 53.349609 A 0.50005 0.50005 0 0 0 65.628906 53.044922 z M 34.443359 54.759766 C 35.011286 55.847667 35.579642 56.937532 36.205078 58.033203 C 36.826563 59.121189 37.472963 60.158584 38.119141 61.195312 C 36.128897 60.929207 34.214513 60.615755 32.435547 60.234375 C 32.992839 58.480623 33.678642 56.641451 34.443359 54.759766 z M 65.556641 54.759766 C 66.321381 56.641881 67.007169 58.480753 67.564453 60.234375 C 65.785578 60.615759 63.871463 60.929211 61.880859 61.195312 C 62.52706 60.15849 63.174239 59.120366 63.794922 58.033203 C 64.421262 56.937301 64.988967 55.84763 65.556641 54.759766 z M 69.070312 63.025391 A 0.50005 0.50005 0 0 0 68.951172 63.039062 C 65.802813 63.747741 62.362023 64.281142 58.703125 64.611328 A 0.50005 0.50005 0 0 0 58.337891 64.824219 C 56.19042 67.920595 53.957194 70.737535 51.710938 73.201172 A 0.50005 0.50005 0 0 0 51.726562 73.892578 C 55.779637 77.954731 59.758301 80.758428 63.240234 81.691406 C 65.056311 82.176322 66.645865 82.09819 67.894531 81.369141 C 69.657278 80.339542 70.60976 78.054468 70.873047 74.96875 C 71.136333 71.883032 70.706962 67.937529 69.544922 63.402344 A 0.50005 0.50005 0 0 0 69.070312 63.025391 z M 30.949219 63.027344 A 0.50005 0.50005 0 0 0 30.453125 63.402344 C 29.2921 67.936953 28.863668 71.883182 29.126953 74.96875 C 29.390238 78.054318 30.342702 80.33953 32.105469 81.369141 A 0.50005 0.50005 0 0 0 32.107422 81.371094 C 33.355844 82.097737 34.944501 82.175337 36.759766 81.691406 C 40.241699 80.758428 44.221354 77.953739 48.273438 73.892578 A 0.50005 0.50005 0 0 0 48.289062 73.203125 C 46.042704 70.738385 43.809552 67.920554 41.662109 64.824219 A 0.50005 0.50005 0 0 0 41.296875 64.611328 C 37.638967 64.281142 34.195212 63.747736 31.046875 63.039062 A 0.50005 0.50005 0 0 0 30.949219 63.027344 z M 68.660156 64.091797 C 69.711014 68.348085 70.117284 72.068087 69.876953 74.884766 C 69.62774 77.805548 68.719879 79.729458 67.390625 80.505859 C 66.433292 81.06481 65.14997 81.167648 63.498047 80.726562 C 60.413443 79.900048 56.632901 77.274739 52.769531 73.470703 C 54.89077 71.110933 56.992647 68.476139 59.017578 65.572266 C 62.446146 65.25379 65.664609 64.74378 68.660156 64.091797 z M 31.337891 64.09375 C 34.333533 64.745735 37.552769 65.253791 40.980469 65.572266 C 43.005446 68.476169 45.107339 71.112194 47.228516 73.472656 C 43.366093 77.275733 39.586539 79.900053 36.501953 80.726562 C 34.851218 81.166633 33.566953 81.063217 32.609375 80.505859 C 31.280142 79.72947 30.372262 77.805448 30.123047 74.884766 C 29.882753 72.068634 30.288318 68.348737 31.337891 64.09375 z M 45.109375 64.878906 A 0.50005 0.50005 0 0 0 44.732422 65.673828 C 46.336808 67.853581 47.980774 69.868991 49.628906 71.691406 A 0.50005 0.50005 0 0 0 50.371094 71.691406 C 52.019154 69.868064 53.663228 67.852526 55.267578 65.673828 A 0.50005 0.50005 0 0 0 54.839844 64.878906 C 53.254803 64.95557 51.64292 65 50 65 C 48.35708 65 46.745197 64.95557 45.160156 64.878906 A 0.50005 0.50005 0 0 0 45.109375 64.878906 z M 46.208984 65.904297 C 47.459233 65.952486 48.711881 66 50 66 C 51.288119 66 52.540767 65.952577 53.791016 65.904297 C 52.539411 67.557851 51.273814 69.131598 50 70.564453 C 48.72624 69.132318 47.460557 67.558376 46.208984 65.904297 z" />
            </svg>
          </div>
        )}
        {icon == "fastfeedback" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Feedmeback</span>
            <svg
              className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
              viewBox="0 0 46 32"
            >
              <path
                d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
                fill="currentColor"
              />
            </svg>
          </div>
        )}

        {icon == "vscode" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Vscode Resume</span>

            <svg
              className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
          </div>
        )}
        {icon == "more" && (
          <div className="h-8 w-8 ml-2 mr-4">
            <span className="sr-only">Vscode Resume</span>

            <svg
              className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
        )}
        <div>
          {icon == "more" && (
            <>
              <h4 className="text-lg font-bold tracking-tight text-gray-400 dark:text-gray-100">
                {title}
              </h4>
              <p className="leading-5 text-gray-500 dark:text-gray-300">
                {description}
              </p>
            </>
          )}

          {icon != "more" && (
            <>
              <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {title}
              </h4>
              <p className="leading-5 text-gray-700 dark:text-gray-300">
                {description}
              </p>
              <div className="pt-2 flex md:flex-row space-x-2">
                {tags?.map((tag, idx) => (
                  <p
                    key={idx}
                    className={`leading-5 dark:border text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50  `}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </a>
  );
}
