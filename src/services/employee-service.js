
class EmployeesService {

    subscriptions = []

    getEmployees(search) {
        return fetch('http://www.amock.io/api/miguel-ruan/source-meridian').then(res => res.json()).
            then((employees) => {
                if (search) {
                    employees = employees.filter(employee => employee.id === search);
                }
                return employees
            }).
            then(employees => {
                return new Promise((accept)=>{
                    // delay example
                    setTimeout(() => {
                        accept(employees)
                    }, 600);
                })
            });
    }

    setEmployee(employee) {
        this.notifySubscribers()
    }

    onChangeEmployees(subscription) {
        if (subscription) {
            this.subscriptions.push(subscription)
        }
    }

    unsubscribeOnChangeEmployees(subscriber) {

    }

    notifySubscribers() {
        this.subscriptions.forEach(subscriptor => subscriptor());
    }
}

const EmployeeService = new EmployeesService()
export default EmployeeService