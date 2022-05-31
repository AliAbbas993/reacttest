import React , {useEffect , useState} from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const Listing = () => {

    const navigate = useNavigate();

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const handleUpdate = (val) => {
        navigate(`/update/${val.id}`);
    }

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        },
        {
            button: true,
            cell: (row) => (
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => handleUpdate(row)}
                  >
                    Update {row.id}
                  </button>
            )
          }
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 12,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 23,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 14,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 21,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 15,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 27,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 16,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 29,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 12,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 24,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

  return (
      <div className='table-listing'>
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="table">
                        <DataTable
                            title="Listing Data"
                            columns={columns}
                            data={data}
                            pagination paginationComponentOptions={paginationComponentOptions}
                        />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Listing;