import React from 'react'
import useNavigation from '../hooks/use-navigation';

import classNames from 'classnames';

function Link({to, children, className, activeClassName}) {
    const { navigate , currentPath } =  useNavigation();


    const classes = classNames('text-blue-500',' mb-3', className,

        currentPath === to && activeClassName
     );

    const handleClick = (event) =>{ 
        if(event.metakey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    }
  return <a className={classes} onClick={handleClick} href='link'>{children}</a>
}

export default Link