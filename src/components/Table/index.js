import React from 'react';
import './style.css';
import moment from 'moment';

function Table(props) {
	return (
		<table class="table table-striped">
			<thead>
				<tr>
					<th scope="col">Image</th>
					<th scope="col">Name</th>
					<th scope="col">Phone</th>
					<th scope="col">Email</th>
					<th scope="col">DOB</th>
				</tr>
			</thead>
			<tbody>
				{props.data.map((x, i) => (
					<tr key={`tr-${i}`}>
						<td>
							<img alt={`${x.name.first} ${x.name.last}`} src={x.picture.thumbnail} />
						</td>
						<td>{`${x.name.first} ${x.name.last}`}</td>
						<td>{x.phone}</td>
						<td>{x.email}</td>
						<td>{moment(x.dob.date).format('MM-DD-YYYY')}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
