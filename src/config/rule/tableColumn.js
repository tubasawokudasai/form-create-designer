import {localeProps} from '../../utils';
import uniqueId from '@form-create/utils/lib/unique';

const label = '标签页';
const name = 'table-column';

export default {
    label,
    name,
    inside: true,
    drag: true,
    dragBtn: false,
    mask: false,
    rule() {
        return {
            type: 'MyRow',
            props: {title:'自定义名称'},
            children: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [{type: 'input', field: 'title', title: '选项卡标题'}
        ]);
    }
};
