import { useNavigate, useParams } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import IconButton from "../components/IconButton";
import PencilIcon from "../components/PencilIcon";
import EmployeeDetailItem from "../components/EmployeeDetailItem";
import '../styles/style.css';
import { useGetEmployeeByIdQuery } from "../api";
import { employeeKeyLabelMap } from "../utils";


function EmployeeDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, error, isLoading } = useGetEmployeeByIdQuery(id);
    const employeeDetailKeyMap = employeeKeyLabelMap;

    const actions = [(
        <div className="action-container icon-button" key="icon-button">
            <IconButton
                iconContent={<PencilIcon stroke="#ffffff" />}
                label="Edit"
                handleClick={() => navigate('/edit', { state: { id } })}
            />
        </div>
    )];

    if (error) return (<p> Error </p>);

    if (isLoading) return (<p>Loading</p>);

    return (
        <MainContainer title="Employee Details" actions={actions}>
            <section className="employee-details">
                {Object.keys(data['data']).map(key => {
                    if (!(key in employeeDetailKeyMap)) return null;


                    const dataItem = data['data'][key];
                    const mapItem = employeeDetailKeyMap[key];
                    return (
                        <EmployeeDetailItem
                            key={mapItem.label}
                            label={mapItem.label}
                            content={mapItem.transform(dataItem)}
                        />
                    );
                })}
            </section>
        </MainContainer>
    );
}

export default EmployeeDetail;