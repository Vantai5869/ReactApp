import React, { Component } from 'react';

class Header extends Component {
    show(){
        return <h1>Wellcome</h1>
    }
    render() {
        var users = [
            {
                id:1,
                name:"Tai",
                age:19
            },
            {
                id:1,
                name:"Thìn",
                age:19
            },
            {
                    id:1,
                    name:"Tuấn",
                    age:19
                },
            ];

        var elements = users.map((user, index)=>{
           return   <div>
                        <table>
                            <td>{index}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </table>
                    </div>
        });
        return (
        	<div>
                <h1>{this.show()}</h1>
               <h1>Danh sách user</h1>
                <div>
                    {elements}
                </div>
            </div>
        );
    }
}

export default Header;