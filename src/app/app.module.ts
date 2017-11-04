import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AllTestsComponent } from './pages/all-tests/all-tests.component';
import { AllActivationsComponent } from './pages/all-activations/all-activations.component';
import { AllRespondentsComponent } from './pages/all-respondents/all-respondents.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavigationButtonsComponent } from './shared/components/header/navigation-buttons/navigation-buttons.component';
import { ToolsComponent } from './shared/components/header/tools/tools.component';
import { WraperComponent } from './pages/all-tests/tests-list/tests-list.component';
import { CreateNewBlockComponent } from './pages/all-tests/create-new-block/create-new-block.component';
import { TestItemComponent } from './pages/all-tests/tests-list/test-item/test-item.component';
import { CreateNewTestComponent } from './pages/create-new-test/create-new-test.component';
import { CreateNewTestUploaderComponent } from './pages/create-new-test/create-new-test-uploader/create-new-test-uploader.component';
import { AllRespondentsListComponent } from './pages/all-respondents/all-respondents-list/all-respondents-list.component';
import { RespondentItemComponent } from './pages/all-respondents/all-respondents-list/respondent-item/respondent-item.component';
import { CreateNewComponent } from './shared/components/create-new/create-new.component';
import { ActivationsListWrapperComponent } from './pages/all-activations/activations-list-wrapper/activations-list-wrapper.component';
import { ActivationItemComponent } from './pages/all-activations/activations-list-wrapper/activation-item/activation-item.component';
import { PageInformationComponent } from './pages/all-activations/page-information/page-information.component';
import { HorizontalLineComponent } from './shared/components/horizontal-line/horizontal-line.component';
import { GetRespondentsService} from './shared/services/getRespondents.service';
import { MultiselectComponent } from './shared/components/multiselect/multiselect.component';
import { QuestionFormComponent } from './pages/create-new-test/question-list/question-form.component';
import { QuestionComponent } from './pages/create-new-test/question-list/question/question.component';
import { FileuploaderComponent } from './pages/create-new-test/question-list/fileuploader/fileuploader.component';
import { TestService } from './shared/services/test.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AllTestsComponent,
    AllActivationsComponent,
    AllRespondentsComponent,
    HeaderComponent,
    NavigationButtonsComponent,
    ToolsComponent,
    WraperComponent,
    CreateNewBlockComponent,
    TestItemComponent,
    CreateNewTestComponent,
    CreateNewTestUploaderComponent,
    AllRespondentsListComponent,
    RespondentItemComponent,
    TestItemComponent,
    CreateNewComponent,
    ActivationsListWrapperComponent,
    ActivationItemComponent,
    PageInformationComponent,
    HorizontalLineComponent,
    CreateNewComponent,
    MultiselectComponent,
    FileuploaderComponent,
    QuestionFormComponent,
    QuestionComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GetRespondentsService, TestService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
