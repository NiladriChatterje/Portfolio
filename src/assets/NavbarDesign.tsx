const NavbarDesign = () => {
  return (
    <>
      {window.innerWidth > 880 ? <svg id={'svg-1'} viewBox="0 0 1723 883" fill="none" preserveAspectRatio='xMidYMax meet'>
        <path className="path" d="M0 4.36889H1642.86C1723.15 -3.69789 1718.35 22.8689 1718.35 111.284C1718.35 191.776 1720.35 658.819 1718.35 882.369" stroke="url(#paint0_linear_25_2)" strokeWidth="6" />
        <path className="path" d="M0 4.36889H1642.86C1723.15 -3.69789 1718.35 22.8689 1718.35 111.284C1718.35 191.776 1720.35 658.819 1718.35 882.369" stroke="url(#paint1_linear_25_2)" strokeWidth="6" />
        <defs>
          <linearGradient id="paint0_linear_25_2" x1="860.5" y1="4.3689" x2="860.5" y2="882.369" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F28709" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear_25_2" x1="860.5" y1="4.3689" x2="860.5" y2="882.369" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F28709" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
        :
        <svg id={'svg-1'} viewBox="0 0 985 1880" fill="none" preserveAspectRatio='xMidYMax meet' >
          <path className="path" d="M0 5.92189H938.372C984.234 -11.2965 981.492 45.4099 981.492 234.131C981.492 405.939 982.635 1402.84 981.492 1880" stroke="url(#paint0_linear_40_10)" strokeWidth="6" />
          <path className="path" d="M0 5.92189H938.372C984.234 -11.2965 981.492 45.4099 981.492 234.131C981.492 405.939 982.635 1402.84 981.492 1880" stroke="url(#paint1_linear_40_10)" strokeWidth="6" />
          <defs>
            <linearGradient id="paint0_linear_40_10" x1="491.503" y1="5.92189" x2="491.503" y2="1880" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F28709" />
              <stop offset="1" stopColor="#F08609" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_40_10" x1="491.503" y1="5.92189" x2="491.503" y2="1880" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F28709" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      }

    </>
  )
}

export default NavbarDesign;