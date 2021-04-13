import React from 'react';

import { navigate } from 'gatsby';

import ReactFlagsSelect from 'react-flags-select';


function LanguageSelector({ classes, lang, location, className }) {
    const [selected, setSelected] = React.useState(lang == "en" ? 'GB' : lang.toUpperCase());

    function switchLanguage(code) {
        console.log(code)
        if (code == 'GB') {
            navigate('/')
        } else {
            navigate(`/${code.toLowerCase()}`)
        }
    }

    return (
        <ReactFlagsSelect
            selected={selected}
            countries={["GB", "FR", "ES"]}
            showSelectedLabel={false}
            showOptionLabel={false}
            onSelect={code => switchLanguage(code)}
        />
    );
}

export default LanguageSelector;
