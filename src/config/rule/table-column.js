import {localeProps} from '../../utils';

const label = '标签页';
const name = 'table-column';

export default {
    label,
    name,
    inside: true,
    drag: true,
    dragBtn: false,
    mask: false,
    rule({t}) {
        return {
            type: 'el-table-column',
            children: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            {type: 'input', field: 'label', title: '列标题'},
            {type: 'input', field: 'prop', title: '属性'},
        ]);
    }

};
