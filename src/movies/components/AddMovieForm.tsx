import React, { useState } from 'react';

import { InputField, Button } from 'shared/components';
import { MoviesAction } from 'types';

interface AddMovieFormProps {
  onSubmit: (data: Record<"imageUrl" | "title" | "subtitle" | "description", string>) => void,
  onCancel: () => void,
}

export function AddMovieForm({ onSubmit, onCancel }: AddMovieFormProps) {
  // TODO: Implement form for adding a movie
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form className="p-4 ">
      {/* TODO: Add code to make form actions work */}
      <InputField name="Url" value={url} setter={setUrl} />
      <InputField name="Title" value={title} setter={setTitle} />
      <InputField name="Subtitle" value={subtitle} setter={setSubtitle} />
      <InputField name="Description" value={description} setter={setDescription} />
      <div className="text-center">
        <Button onClick={() => onSubmit({
          imageUrl: url,
          title: title,
          subtitle: subtitle,
          description: description
        })}>
          Submit
        </Button>
        <Button onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
