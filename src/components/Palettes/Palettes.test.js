import React from 'react';
import { shallow } from 'enzyme';
import { Palettes } from './Palettes';
import { addPalette, deletePalette } from '../../actions';

describe('Palettes', () => {
	let wrapper;
	let mockProject;
	let mockPalette;
	let mockPalettes;
	let mockAddPalette;
	let mockDeletePalette;

	beforeEach(() => {
		mockAddPalette = jest.fn();
		mockDeletePalette = jest.fn();
		mockProject = {id: 29, name: "named Ryan"};
		mockPalette = [
			{	locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			},
			{	locked: false,
				color: "#816379"
			},
			{ locked: false,
				color: "#816379"
			}
		];
		mockPalettes = [
		{	color_1: "CF71BD",
			color_2: "D09B24",
			color_3: "0C2A28",
			color_4: "CC3EDC",
			color_5: "816379",
			name: "hi there",
			project_id: 30,
			id: 40},
		{	color_1: "CF71BB",
			color_2: "D09B22",
			color_3: "002A28",
			color_4: "CC3EDC",
			color_5: "886379",
			name: "bye there",
			project_id: 31,
			id: 41}
		];


		wrapper = shallow(
			<Palettes 
				addPalette={mockAddPalette}
				deletePalette={mockDeletePalette}
				project={mockProject}
				palette={mockPalette}
				palettes={mockPalettes}
			/>
		)
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should handleChange', () => {
		const mockNameEvent = {
			target: {
				value: 'Palette One'
			}
		};

		wrapper.instance().handleChange(mockNameEvent);
		expect(wrapper.state().name).toEqual('Palette One')
	});

});