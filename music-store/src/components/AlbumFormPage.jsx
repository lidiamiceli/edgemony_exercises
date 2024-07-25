import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchAlbumById, addAlbum, updateAlbum } from '../api/albumClient';
import AlbumForm from './AlbumForm';
import SkeletonLoader from './SkeletonLoader';
import ErrorComponent from './ErrorComponent';

const AlbumFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ id: null, collectionName: '', artistName: '', artworkUrl100: '', primaryGenreName: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ message: "", isError: false });

  useEffect(() => {
    const fetchAlbum = async () => {
      if (id) {
        try {
          const album = await fetchAlbumById(id);
          setFormState(album);
        } catch (error) {
          console.error('Errore nella fetch:', error);
          setIsError({ message: error.message, isError: true });
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchAlbum();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleAddOrUpdateAlbum = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (formState.id) {
        await updateAlbum(formState.id, formState);
      } else {
        await addAlbum(formState);
      }
      navigate('/albums');
    } catch (error) {
      console.error('Errore nella fetch:', error);
      setIsError({ message: error.message, isError: true });
    } finally {
      setIsLoading(false);
    }
  };

  if (isError.isError) return <ErrorComponent message={isError.message} />;
  if (isLoading) return <SkeletonLoader />;

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 text-center">{formState.id ? 'Modifica Album' : 'Aggiungi Album'}</h1>
      <AlbumForm
        formState={formState}
        handleInputChange={handleInputChange}
        handleAddOrUpdateAlbum={handleAddOrUpdateAlbum}
      />
    </div>
  );
};

export default AlbumFormPage;
