import React from 'react';
import PropTypes from 'prop-types';
import { Tab as TabComponent } from 'semantic-ui-react';
  
const Tab = (menuItems) => {
    return(
    	<div>
            <TabComponent menu={{ secondary: true, pointing: true }} panes={menuItems} />
        </div>
    );
};

Tab.propTypes = {
    menuItems: PropTypes.array.isRequired
};

export default Tab;