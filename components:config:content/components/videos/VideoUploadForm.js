import { useState } from 'react';

const VideoUploadForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="p-4 bg-white border rounded shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Column 1 */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-600">Nombre</label>
          <input onChange={handleChange} name="nombre" type="text" className="w-full p-2 border rounded" placeholder="Nombre" />

          <label className="block mt-4 mb-2 text-sm font-semibold text-gray-600">Docente</label>
          <input onChange={handleChange} name="docente" type="text" className="w-full p-2 border rounded" placeholder="Docente" />

          <label className="block mt-4 mb-2 text-sm font-semibold text-gray-600">Tipo</label>
          <input onChange={handleChange} name="tipo" type="text" className="w-full p-2 border rounded" placeholder="Tipo" />

          <label className="block mt-4 mb-2 text-sm font-semibold text-gray-600">Imagen principal</label>
          <input onChange={handleChange} name="imagenPrincipal" type="file" className="w-full p-2 border rounded" />
        </div>

        {/* Column 2 */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-600">Nivel</label>
          <select onChange={handleChange} name="nivel" className="w-full p-2 border rounded">
            <option value="Medio">Medio</option>
            <option value="Bajo">Bajo</option>
            <option value="Alto">Alto</option>
          </select>

          <label className="block mt-4 mb-2 text-sm font-semibold text-gray-600">Descripción</label>
          <textarea onChange={handleChange} name="descripcion" className="w-full p-2 border rounded" placeholder="Descripción"></textarea>

          <label className="block mt-4 mb-2 text-sm font-semibold text-gray-600">Multimedia Asignada</label>
          <input onChange={handleChange} name="video" type="file" className="w-full p-2 border rounded" accept="video/*" placeholder="Upload video (max 1 min)" />
          <input onChange={handleChange} name="imagenes" type="file" className="w-full p-2 border rounded" accept="image/*" placeholder="Upload images" multiple />

          <label className="block mt-4 mb-2 text-sm font-semibold text-gray-600">URL</label>
          <input onChange={handleChange} name="url" type="url" className="w-full p-2 border rounded" placeholder="URL" />

          <label className="block mt-4 mb-2 text-sm font-semibold text-gray-600">Archivo SB3</label>
          <input onChange={handleChange} name="archivoSB3" type="file" className="w-full p-2 border rounded" />
        </div>
      </div>

      <button type="submit" className="mt-4 p-2 text-white bg-blue-500 rounded hover:bg-blue-600">Submit</button>
    </form>
  );
}

export default VideoUploadForm;
