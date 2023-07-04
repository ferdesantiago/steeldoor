import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

const Table: React.FC<{ url: string, headers: string[], selectItem: Function, setLoading?: Function, loading?: Boolean }> = ({ url, headers, selectItem, setLoading, loading }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [rows, setRows] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');

  const fetchData = async () => {
    try {
      const response: AxiosResponse<any[]> = await axios.get<any[]>(`${apiUrl}${url}?search=${search}`);
      setRows(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      if (setLoading) {
        setLoading(false)
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [search]);

  useEffect(() => {
    if (loading) {
      fetchData();
    }
  }, [loading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Search:</label>
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {headers.map((index, key) => {
              return (
                <th key={key} className="py-2 px-4 bg-gray-100 border-b border-gray-200 border-r">{index}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((index, key) => {
            return (
              <tr key={key} onClick={() => selectItem(index)}>
                {Object.keys(index).map((data, dataKey) => {
                  return (
                    <td key={dataKey} className="py-2 px-4 border-b border-gray-200 border-r">{index[data]}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;