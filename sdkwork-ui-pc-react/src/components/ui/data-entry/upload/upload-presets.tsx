import { FileUpload } from './file-upload';
import type { SpecializedUploadProps } from './upload-types';
import { getUploadVariantDefaults } from './upload-utils';

function ImageUpload({ accept, listType, ...props }: SpecializedUploadProps) {
  const defaults = getUploadVariantDefaults('image');

  return <FileUpload accept={accept ?? defaults.accept} listType={listType ?? defaults.listType} variant="image" {...props} />;
}

function VideoUpload({ accept, listType, ...props }: SpecializedUploadProps) {
  const defaults = getUploadVariantDefaults('video');

  return <FileUpload accept={accept ?? defaults.accept} listType={listType ?? defaults.listType} variant="video" {...props} />;
}

function AudioUpload({ accept, listType, ...props }: SpecializedUploadProps) {
  const defaults = getUploadVariantDefaults('audio');

  return <FileUpload accept={accept ?? defaults.accept} listType={listType ?? defaults.listType} variant="audio" {...props} />;
}

function DocumentUpload({ accept, listType, ...props }: SpecializedUploadProps) {
  const defaults = getUploadVariantDefaults('document');

  return <FileUpload accept={accept ?? defaults.accept} listType={listType ?? defaults.listType} variant="document" {...props} />;
}

export { AudioUpload, DocumentUpload, ImageUpload, VideoUpload };
