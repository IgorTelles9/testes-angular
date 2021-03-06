import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [CommonModule],
  exports: [LikeWidgetComponent],
  providers: [UniqueIdService],
})
export class LikeWidgetModule {}
