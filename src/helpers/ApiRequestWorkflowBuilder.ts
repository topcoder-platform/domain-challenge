import {
  NextWorkflow,
  NextWorkflowConfiguration,
  WorkflowBuilder,
  WorkflowPayload,
} from "./WorkflowBuilder";

interface ApiRequestNextWorkflowConfiguration extends NextWorkflowConfiguration {
  endpoint?: string;
  method?: string;
}

interface NextApiRequestWorkflow extends NextWorkflow {
  configuration: ApiRequestNextWorkflowConfiguration;
}

interface ApiRequestWorkflowPayload extends WorkflowPayload {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body: {
    phase: string;
    operation: "open" | "close";
  };
  authStrategy: string; // TODO: find a better way to do this! Today it's not used and this is just a placeholder
}

class ApiWorkflowBuilder extends WorkflowBuilder {
  public static readonly WorkflowName = "apiWorkflow";

  constructor() {
    super();
    this._workflow.name = ApiWorkflowBuilder.WorkflowName;
  }

  setPayload(payload: ApiRequestWorkflowPayload): this {
    this._workflow.payload = payload;
    return this;
  }

  setSuccess(nextWorkflow: NextApiRequestWorkflow): this {
    this._workflow.success = nextWorkflow;
    return this;
  }

  setFailure(nextWorkflow: NextApiRequestWorkflow): this {
    this._workflow.failure = nextWorkflow;
    return this;
  }
}

export { ApiRequestNextWorkflowConfiguration, ApiWorkflowBuilder, ApiRequestWorkflowPayload };
