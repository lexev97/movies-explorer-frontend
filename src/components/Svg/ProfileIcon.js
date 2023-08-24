const ProfileIcon = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30px'
      height='30px'
      viewBox='0 0 30 30'
    >
      <path
        fill={props.iconOuter || 'black'}
        fillRule='nonzero'
        d='M6 0l18 0c3.31,0 6,2.69 6,6l0 18c0,3.31 -2.69,6 -6,6l-18 0c-3.31,0 -6,-2.69 -6,-6l0 -18c0,-3.31 2.69,-6 6,-6z'
      />
      <path
        fill={props.iconInner || '#F3C1F8'}
        d='M16.43 16.88c1.36,-0.56 2.32,-1.9 2.32,-3.46 0,-2.08 -1.68,-3.75 -3.75,-3.75 -2.07,0 -3.75,1.67 -3.75,3.75 0,1.56 0.96,2.9 2.32,3.46 -1.39,0.23 -2.68,0.8 -3.76,1.62l1.38 1.83c1.06,-0.79 2.38,-1.27 3.81,-1.27 1.43,0 2.75,0.48 3.81,1.27l1.38 -1.83c-1.08,-0.82 -2.37,-1.39 -3.76,-1.62z'
      />
    </svg>
  );
};

export default ProfileIcon;
