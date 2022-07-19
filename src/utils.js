export const employeeKeyLabelMap = {
    name: {
        label: "Employee Name",
        transform: data => data
    },

    id: {
        label: "Employee ID",
        transform: data => data
    },

    joiningDate: {
        label: "Joining Date",
        transform: data => data?.substring(0, 10)
    },

    email: {
        label: "Employee Email",
        transform: data => data
    },

    role: {
        label: "Role",
        transform: data => data
    },

    status: {
        label: "Status",
        transform: data => (
            <div
                className={`status status-${data?.toLowerCase()}`}
            ><div className="tag">{data ?? ""}</div></div>
        )
    },

    experience: {
        label: "Experience",
        transform: data => `${data} Years`
    },

    address: {
        label: "Address",
        transform: data => {
                const splitArray = data?.split(",");
                return splitArray?.map((addressLine, index) => (
                    <span className="addressLine" key={index}>
                        {`${addressLine}`}
                        {index !== splitArray.length-1 && ","}
                        <br />
                    </span>
                )); 
        }
    },

    idProof: {
        label: "Employee ID Proof",
        transform: data => data
    }
};

export const inputFields = [
    { label: 'Employee Name', name: 'name' },
    { label: 'Employee Email', type: 'email', name: 'email' },
    { label: 'Employee ID', name: 'id' },
    { label: 'Joining Date', type: 'date', name: 'joiningDate' },
    { label: 'Experience', name: 'experience', type: 'number' },
    { label: 'Address', name: 'address' }
  ];