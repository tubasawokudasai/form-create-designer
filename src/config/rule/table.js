import {localeProps} from '../../utils';
import uniqueId from '@form-create/utils/lib/unique';

const label = '表格';
const name = 'table';
const title = ''
export default {
    icon: 'icon-tab',
    label,
    name,
    children: 'table-column',
    mask: false,
    rule() {
        return {
            type: 'custom-table',
            field:  uniqueId(),
            value:[{}],
            children: [],
            props: {
                column: [{label: '姓名', key: 'name'}, {label: '年龄', key: 'age'}],
                // modelValue: []
            },
            title
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            {
                type: 'input',
                field: 'title',
                title: t('components.table.tableTitle'),
            },
            // {
            //     type: 'input',
            //     field: 'id',
            //     title: t('components.table.tableId'),
            // },
            {
                type: 'CustomTableOptions',
                props: {
                    title,
                    modelValue: [{label: '姓名', key: 'name'}, {label: '年龄', key: 'age'}],
                    column: [{
                        label: t('components.table.headerLabel'),
                        key: 'label'
                    }, {label: t('components.table.headerName'), key: 'key'}]
                }
            }]);
    }
};
