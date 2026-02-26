
import React, { useRef } from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Camera, X } from 'lucide-react';

interface PhotoUploadProps {
  files: File[];
  onChange: (files: File[]) => void;
}

const MAX_FILES = 5;
const MAX_SIZE_MB = 5;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

const PhotoUpload = ({ files, onChange }: PhotoUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files);
    const validFiles = newFiles.filter(f => {
      if (f.size > MAX_SIZE_BYTES) return false;
      if (!f.type.startsWith('image/')) return false;
      return true;
    });
    const combined = [...files, ...validFiles].slice(0, MAX_FILES);
    onChange(combined);
    // Reset input so same file can be re-selected
    if (inputRef.current) inputRef.current.value = '';
  };

  const removeFile = (index: number) => {
    onChange(files.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Label>Foto's toevoegen (optioneel)</Label>
      <p className="text-sm text-muted-foreground mb-2">
        Max {MAX_FILES} foto's, max {MAX_SIZE_MB}MB per foto (jpg, png, webp)
      </p>
      
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      {files.length < MAX_FILES && (
        <Button
          type="button"
          variant="outline"
          onClick={() => inputRef.current?.click()}
          className="mb-3"
        >
          <Camera className="w-4 h-4 mr-2" />
          Foto's selecteren
        </Button>
      )}

      {files.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
          {files.map((file, i) => (
            <div key={i} className="relative group rounded-lg overflow-hidden border">
              <img
                src={URL.createObjectURL(file)}
                alt={`Upload ${i + 1}`}
                className="w-full h-24 object-cover"
              />
              <button
                type="button"
                onClick={() => removeFile(i)}
                className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Verwijder foto"
              >
                <X className="w-3 h-3" />
              </button>
              <div className="text-xs truncate px-1 py-0.5 text-muted-foreground">{file.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
