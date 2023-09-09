import Chart from '../../types/Chart';
import { GetSongsApiHook } from '../../util/getSongs';
import uuid from '../../util/uuid';
import GridCard from './GridCard';
import Scrollable from './Scrollable';

export function ChartDummyData(): Chart {
    return {
        id: uuid() + '-' + uuid(),
        title: "",
        subtitle: "",
        type: "",
        image: [],
        url: "",
        firstname: "",
        explicitContent: "",
        language: "",
    };
}

export interface ChartsProps {
    data?: Chart[];
    append?: React.ReactNode;
}
function Charts({ data, append }: ChartsProps) {
    let items = data || new Array(10).fill(null).map(ChartDummyData).map(item => ({ ...item, loading: true }));
    items = items.filter(item => item.type !== "song");
    return (
        <>
            <Scrollable title="Charts">
                {items.map((chart: Chart) => <GridCard key={chart.id} api={(`${chart.type}s` as GetSongsApiHook)} item={chart} />)}
            </Scrollable>
            {data && data.length === 0 && append}
        </>
    );
}

export default Charts;