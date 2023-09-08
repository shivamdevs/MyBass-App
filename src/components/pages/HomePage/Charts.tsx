import Chart from '../../../types/Chart';
import { GetSongsApiHook } from '../../../util/getSongs';
import uuid from '../../../util/uuid';
import GridCard from '../../Cards/GridCard';
import Scrollable from '../../Cards/Scrollable';

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
}
function Charts({ data }: ChartsProps) {
    data = data || new Array(10).fill(null).map(ChartDummyData).map(item => ({ ...item, loading: true }));
    data = data.filter(item => item.type !== "song");
    return (
        <Scrollable title="Charts">
            {data.map((chart: Chart) => <GridCard key={chart.id} api={(`${chart.type}s` as GetSongsApiHook)} item={chart} />)}
        </Scrollable>
    );
}

export default Charts;